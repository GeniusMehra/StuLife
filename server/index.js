import express from 'express'
import {config} from 'dotenv'
import { connectDB } from './data/database.js'
import placeRouter from './routes/placements.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/users.js'
import cors from 'cors'

config({
    path:"./data/config.env"
})

connectDB()
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/v1/placements",placeRouter)
app.use("/api/v1/users",userRouter)
app.listen(process.env.PORT,()=>{
    console.log(`The server is running on Port ${process.env.PORT}`)
})