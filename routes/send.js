// Import the required modules
const express = require("express");
const mailSender = require("../utils/mailSender");
const { email } = require("../controllers/email");
const router = express.Router();

router.post('/send-email', email);

module.exports = router;