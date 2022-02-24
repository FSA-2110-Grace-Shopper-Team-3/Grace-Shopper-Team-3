//nodemailer
const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/send_mail', cors(), async (req, res) => {
  let { text } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: 'kzammito@gmail.com',
    html: `<div>
      <h1>HERE'S THE EMAIL</h1>
      <p>${text}</p>
      </div>`,
  });
});
