const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
// require("dotenv").config();

let cron = require('node-cron');

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'arely.goyette@ethereal.email ', // generated ethereal user
        pass: 'Hz4WEMJJgQ9pZqcamx'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
});
transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
    let mailOptions = {
        from: 'arely.goyette@ethereal.email', // sender address
        to: 'eqpnfykqhtqfysyhvf@tmmwj.net', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        // html: output // html body
    };



 cron.schedule('1 * * * *', () => {

        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
            res.json({
                status: "fail",
            });
            } else {
            console.log("== Message Sent ==");
            res.json({
                status: "success",
            });
            }
        });
 });

});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});
