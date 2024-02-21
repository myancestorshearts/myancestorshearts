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

    const { email, password } = req.body;
    console.log(email)

    if (!email || !password) {
        return res.status(400).json({ message: 'Login and password are required.' });
    }


    try {
        // const email = login.trim().toLowerCase();
        // console.log('Attempting to find user with email:', login);

        const existingUser = await User.findOne({ email: email });
        // console.log('User found:', existingUser.email);


        if (!existingUser) {
            return res.status(401).json({ message: 'User not found. Please register.' });
        }

        const isMatch = await existingUser.matchPassword(password);
        // console.log('password match:', isMatch)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password. Please try again!' });
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, userId: existingUser._id, email: existingUser.email });
    } catch (error) {
        // Detailed error logging
        console.error("Login error:", {
            message: error.message,
            stack: error.stack
        });

        // Send a generic error message to the client
        res.status(500).json({ message: "An internal server error occurred." });
    }
});


export default router;

