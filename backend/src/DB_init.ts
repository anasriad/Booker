import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export default async function Connect() {
    try {
        (await mongoose.connect(process.env.DATABASE_URL!)) 
    } catch (error) {
        console.log(error)
    }
}