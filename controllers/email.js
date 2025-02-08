const mailSender = require("../utils/mailSender");

exports.email = async(req, res) =>{
    try{
    const {email, subject, body} = req.body;
    console.log(email);
    await mailSender(email, subject, body);
    res.status(200).json({
        message:'Email Sent Successsfully',
        succcess:true,
    })
    }
    catch(error)
    {
        return res.status(500).json({
            message: "Error sending email",
            message: error.message
        })
    }
}