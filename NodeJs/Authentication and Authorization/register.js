router.post("/register", checkAuth, [
    body("first-name", "Enter a valid name ").isLength({ min: 2 }),
    body("last-name", "Enter a valid name ").isLength({ min: 2 }),
    body("security-question", "Select a question for security. ").isLength({ min: 2 }),
    body("security-ans", "Enter a valid answer.").isLength({ min: 2 }),
    body("email", "Enter a valid Email").isEmail(),
    body("phone").optional().matches(/^\d{10}$/).withMessage("Enter a valid 10-digit phone number"),
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
        }),
    body("confirm")
        .custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error("Passwords do not match");
          }
          return true;
        })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("register", { message: errors.array()[0], otherDetails: req.body});
    }

    try {
        // Check whether the user with these details exists or not.
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).render("register", { message: {msg: "User already exists with this email.", path:"general"}, otherDetails: req.body })
        }

        const {email, phone, password } = req.body;
        const firstName = req.body['first-name'];
        const lastName = req.body['last-name'];
        const name = firstName + ' ' + lastName;

        // Creating Hash of password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const question = req.body['security-question'].trim();
        const answer = req.body['security-ans'].trim();
        user = new User({
            email: email,
            password: hash,
            name: name,
            phone: phone,
            'security-question': question,
            'security-ans': answer,
            seller: false,
            address: []
        })

        user.save().then().catch((err) => {
            return res.status(404).render("register", { message: {msg: "Error to create User for you : ", path:"general"}, otherDetails: req.body })
        })

        const data = {
            user: {
                id: user.id,
            },
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        // res.cookie('authtoken', authtoken, { httpOnly: true, secure: process.env.TOKEN_HEADER_KEY == "user_token_header_key" });
        res.cookie('authtoken', authtoken);

        let returnTo = req.session.returnTo || null;
        delete req.session.returnTo;

        res.redirect(returnTo || '/');

    } catch (error) {
        console.log(error)
        res.status(500).render("register", {message: {msg: "Internal Server Error", path: "general"}, otherDetails: req.body });
    }

})
