import dotenv from 'dotenv';
import express from 'express'
import Connect from './DB_init';
import RouterApp from './routers/Router';
dotenv.config();
const app = express()

app.use(express.json())
app.use(RouterApp)
Connect()

app.listen(process.env.PORT, () => {
  console.log('Server is Running in Port:' + process.env.PORT)
})
