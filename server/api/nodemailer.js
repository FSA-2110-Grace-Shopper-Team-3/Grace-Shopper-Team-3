// const router = require('express').Router();
// require('dotenv').config();
// const nodemailer = require('nodemailer');

// const cors = require('cors');

// const DOMAIN = 'http:/localhost/8080';

// // CREATE AN ORDER
// router.post('/send_mail', cors(), async (req, res, next) => {
//   let { text } = req.body;
//   const transport = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   await transport.sendMail({
//     from: process.env.MAIL_FROM,
//     to: 'test@test.com',
//     subject: 'Test email',
//     html: `
//       <div>
//         <h3>${text}</h3>
//         <p>Thanks for shopping with us!</p>
//       </div>
//       `,
//   });
// });
