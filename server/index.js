import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import usersRoutes from './routes/dashboard_routes/users.js'
import generalRoutes from './routes/dashboard_routes/general.js'
import managementRoutes from './routes/dashboard_routes/management.js'
import salesRoutes from './routes/dashboard_routes/sales.js'
import authRoute from './routes/admin_routes/authRoutes.js'
import userRoute from './routes/users_routes/userRoutes.js'

process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// Configuration
const app = express()
dotenv.config()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({
    policy: 'cross-origin'
}));
app.use(morgan('common'))
app.use(express.json())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Admin Routes
app.use('/authRoutes', authRoute)

// Client Routes
app.use('/userRoutes', userRoute)




// Dashboard ROUTES
app.use('/users', usersRoutes)
app.use('/general', generalRoutes)
app.use('/management', managementRoutes)
app.use('/sales', salesRoutes)


// MONGOOSE SETUP

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((err) => console.log(`${err} did not connect`))




export default app;