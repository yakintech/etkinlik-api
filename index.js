const express = require('express');
const app = express();
const PORT = 8080;


const adminUserRouter = require('./routes/adminUserRoutes')


app.use('/api/adminuser', adminUserRouter)



app.listen(PORT, () => {
    console.log('Server is runnig..');
})