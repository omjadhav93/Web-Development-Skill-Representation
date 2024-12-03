router.post("/login", checkAuth, [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("login", { message: errors.array()[0], otherDetails: req.body});
    }

    try {
        let user = await User.findOne({ email: req.body.email }).select('+password')
        if (!user) {
            return res.status(400).render("login",{message: {msg: "User doesn't exists.",path:"email"}, otherDetails: req.body})
        }

        
        let hash = user.password
        
        const result = await bcrypt.compare(req.body.password, hash)
        
        if (!result) {
            return res.status(400).render("login",{message: {msg: "Wrong Password!",path: "password"}, otherDetails: req.body})
        }
        
        const data = {
            user: {
                id: user.id
            }
        }
        
        const authtoken = jwt.sign(data, JWT_SECRET);
        // res.cookie('authtoken', authtoken, { httpOnly: false, secure: process.env.TOKEN_HEADER_KEY == "user_token_header_key" });
        res.cookie('authtoken', authtoken);

        let returnTo = req.session.returnTo || null;
        delete req.session.returnTo;

        res.redirect(returnTo || '/');

    } catch (error) {
        console.log(error)
        res.status(500).render("login", {message: {msg: "Internal Server Error", path: "general"}, otherDetails: req.body });
    }
})
