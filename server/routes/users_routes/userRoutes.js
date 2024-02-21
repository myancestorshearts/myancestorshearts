import express from "express";
import Client from '../../models/user_model/client-users.js'
import jwt from "jsonwebtoken";

const router = express.Router();

// Registration Route
router.post('/client-register', async(req, res) => {

    const {email, password, gender, dob, country, state, town } = req.body;

    try{
        
        // Check if the client already exist
        const existingUser = await Client.findOne({ email })
        if(existingUser) {
            return res.status(400).json({ message: "User already exists, try another email"});
        }

        // creates a new client 
        const client = new Client({
            email,
            password,
            gender,
            dob,
            country,
            state,
            town
        })

        await client.save();

        const token = jwt.sign({ email: client.email, id: client._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({ result: client, token })

    }
    catch (err){
        console.log(err); // Log the error
        res.status(500).json({ message: 'Error' })
    }


})

router.post('/client-login', async(req, res) => {
    const {email, password} = req.body

    if( !email || !password) {
        return res.status(400).json({ message: "Email and password are required for login"})
    }

    try {

        const existingUser = await Client.findOne({ email: email})

        if(!existingUser) {
            return res.status(401).json({ message: "Invalid!, User not found. Please check your email or create an account"})
        }

        const isMatch = await existingUser.matchPassword(password);

        if(!isMatch) {
            return res.status(401).json({ meassage: "Invalid Password. Please try again"})
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({token, userId: existingUser._id, email: existingUser.email})
        
    } catch (error) {
        res.status(500).json({ message: "An internal server error occurred." });
    }
})
export default router;
