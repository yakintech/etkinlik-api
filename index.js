const express = require('express');
require('dotenv').config()


const connectDB = require('./config/db');

const adminUserRouter = require('./routes/adminUserRoutes');


const app = express();
const PORT = 8080;

connectDB();


app.use(express.json())


app.use('/api/adminuser', adminUserRouter)



app.listen(PORT, () => {
    console.log('Server is runnig..');
})