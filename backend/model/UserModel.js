const bcryptjs = require("bcryptjs");
const { User } = require("../schemas/UserSchema")
const jwt = require("jsonwebtoken");

const expiry = process.env.EXPIRY_DATE || "1d";
const secret = process.env.SECRET || "mysecret"

function generateJsonToken(user) {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            userId: user._id,
            email: user.email
        }
    }, secret);

    return token;
}

const signUpController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(404).json({ message: "all fields is required!", success: false });
        }

        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return res.status(200).json({ message: "User already exists!", success: false });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const user = await User.create({
            email: email,
            username: username,
            password: hashedPassword
        })

        if (!user) {
            return res.status(404).json({ message: "user is not created!", success: false });
        }

        return res.status(201).json({ message: "User registered successfully!", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}

const signInController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({ message: "all fields is required!", success: false });
        }

        const existedUser = await User.findOne({ email });

        if (!existedUser) {
            return res.status(200).json({ message: "User doesn't exist!", success: false });
        }

        const comparePassword = await bcryptjs.compare(password, existedUser.password);

        if (!comparePassword) {
            return res.status(404).json({ message: "password is incorrect!", success: false });
        }

        const token = generateJsonToken(existedUser);

        if(!token){
            return res.status(500).json({message: "token not generated", success: false})
        }

        const options = {
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 900000
        }
        return res.status(200).cookie("token", token, options).json({ message: "User login successfully!", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find({}, {password: 0});

        if(!users){
            return res.status(404).json({ message: "User not found!" });
        }

        return res.status(200).json({ message: "User found successfully!", users });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}
module.exports = { signInController, signUpController, getUser }