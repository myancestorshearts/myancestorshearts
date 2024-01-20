import express from 'express';
import User from '../../models/admin_model/admin_user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();


// Registration Route
router.post('/register', async (req, res) => {
    const { username, email, password, gender, birthday } = req.body;

    try {
        // check if the user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {

            return res.status(400).json({ message: "Already have an account. Please Login in with your Username or Email" });
        }

        // Create new user

        const newUser = new User({ username, email, password, gender, birthday })
        await newUser.save()

        // Generate JWT token
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({ result: newUser, token })
    } catch (err) {
        console.log(err); // Log the error
        res.status(500).json({ message: 'Error' })
    }

})


// Login Route
router.post('/login', async (req, res) => {
    const { login, password } = req.body;

    // Input validation (add your validation logic here)

    try {
        const existingUser = await User.findOne({ $or: [{ email: login }, { username: login }] });
        if (!existingUser || !await bcrypt.compare(password, existingUser.password)) {
            console.error(res.body)
            return res.status(401).json({ message: 'Invalid credentials. Please try again!' });
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, userId: existingUser._id, email: existingUser.email });
    } catch (error) {
        res.status(500).json({ message: "An error occurred." });
    }
});

export default router;

