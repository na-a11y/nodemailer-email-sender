const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from:{
        name: 'Nav Manak',
        address: process.env.USER
    }, // sender address
    to: ["navmanak213@gmail.com"], // list of receivers
    subject: "Hello There!! I am sending this mail using NODEMAILER ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
        {
            filename:'anime-wave.gif',
            path: path.join(__dirname, 'anime-wave.gif'),
        },
        {
            filename:'anime-spy-x-family.gif',
           path: path.join(__dirname, 'anime-spy-x-family.gif'),
        }
    ] // attachments
  }

  const sendMail = async (transporter,mailOptions) =>{
    try{
        await transporter.sendMail(mailOptions);
        console.log("Mail has been sent successfully!!");
    }catch(error){
        console.log(error);
    }
  }

sendMail(transporter,mailOptions);