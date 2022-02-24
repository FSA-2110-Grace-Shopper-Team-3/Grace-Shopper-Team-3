const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
module.exports = app;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: true }));

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

//nodemailer
// app.post('/send_mail', cors(), async (req, res) => {
//   let { text } = req.body;
//   const transport = nodemailer.createTransport({
//     service: 'gmail',
//     host: process.env.MAIL_HOST,
//     port: 587,
//     secure: true,
//     secureConnection: false,
//     auth: {
//       user: 'unplgdgraceshopper@gmail.com',
//       pass: 'Unplgdgr@ce',
//     },
//     tls: {
//       rejectUnauthorized: true,
//     },
//   });
//   await transport.sendMail({
//     from: 'unplgdgraceshopper@gmail.com',
//     to: 'kzammito@gmail.com',
//     html: `<div>
//     <h1>HERE'S THE EMAIL</h1>
//     <p>${text}</p>
//     </div>`,
//   });
// });

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
