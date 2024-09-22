
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'adeoyetunmise53@gmail.com',
        pass: 'm0bis0la'  
    }
});

// Setup email data
const mailOptions = {
    from: 'adeoyetunmise53@gmail.com',     
    to: 'ibuklous@gmail.com',  
    subject: 'Test Email from Nodemailer',  
    text: 'Hello from Node.js using Nodemailer!'  
};

// Send email with the defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent:', info.response);
});
