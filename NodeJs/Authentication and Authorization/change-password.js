router.post('/change-password', checkAuth, [
    body("password")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
        .custom(value => {
            if (!/[A-Z]/.test(value)) {
                throw new Error('Password must contain at least one uppercase letter');
            }
            if (!/[0-9]/.test(value)) {
                throw new Error('Password must contain at least one number');
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                throw new Error('Password must contain at least one special character');
            }
            return true;
        })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("forgot", { section: "Password" , message: errors.array()[0]});
    }

    try {
        const verifiedToken = req.cookies.verifiedToken
        if (!verifiedToken) {
            return res.status(400).render("forgot", { section: "Email", message: {msg: "Your not verified to change password.",path:"general"} });
        }

        jwt.verify(verifiedToken, JWT_SECRET, async (err, decoded) => {
            if (err) {
                // Invalid token
                return res.status(400).render("forgot", { section: "Email", message: {msg: "Your verification got a Error!",path:"general"} });
            } else {
                // Valid token
                const verifyUser = decoded.user;
                if (verifyUser.status === "verified") {
                    let user = await User.findOne({ _id: verifyUser.id }).select('+password')
                    if (!user) {
                        return res.status(400).render("login",{ section: "Email" ,message: {msg: "User doesn't exists.",path: "general"}})
                    }
                    let password = req.body.password;
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(password, salt);
                    user.password = hash;
                    await user.save().then().catch((err) => {
                        res.status(404).send("Error to change password : " + err)
                    })
                    res.redirect("/auth/login");
                }
            }
        });

    } catch (error) {
        console.log(error)
        res.status(500).render("login", {message: {msg: "Internal Server Error", path: "general"}});
    }
})
