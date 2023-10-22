const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors'); 
const mailgun = require('mailgun-js');

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.use(cors());

const mg = mailgun({
  apiKey: 'key-16b7db209e23dbfaa47c168b5737118f',
  domain: 'sandbox9d7ca6e5813c4f458649523ba189d722.mailgun.org',
});

app.post('/', (req, res) => {
  const { email } = req.body;

  const data = {  
    from: 'Sarang <sarangdhar4837.be22@chitkara.edu.in>', // Sender's email address
        to: email, // Recipient's email address (provided in the POST request)
        subject: 'Welcome to Our Daily Insider', // Email subject
        text: 'Hello', // Email body
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent');
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}.`);
});