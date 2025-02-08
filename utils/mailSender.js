const nodemailer = require("nodemailer");
const path = require('path');
require("dotenv").config();

const mailSender = async (email,subject,body) => {
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })
        let info = await transporter.sendMail({
            from: 'Happy Yadav',
            to: `${email}`,
            subject: `${subject}`,
            text: `${body}`,
            attachments: [
                {
                    filename: 'Happy_Yadav_Resume.pdf',
                    path: path.join(__dirname, '../attachments/Happy_Yadav_Resume.pdf'),
                    contentType: 'application/pdf'
                }
            ]
        })
        console.log(info);
        return info;
    }
    catch(error){
        console.log(error.message);
    }
}
module.exports = mailSender;