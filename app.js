const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mailSender = require('./utils/mailSender');
const sendemail = require('./routes/send');

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: "*",  // Allow all origins
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}));
app.use(express.json());

app.use('/api/v1', sendemail);
//app.post('/send-mail', mailSender);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})