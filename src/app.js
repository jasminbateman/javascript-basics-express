const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

// strings

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const length = req.query.length || 1;
  res.json({ result: firstCharacters(string, length) });
});

// numbers

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const num1 = Number(req.params.a);
  const num2 = Number(req.params.b);
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: add(num1, num2) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const num1 = Number(req.params.a);
  const num2 = Number(req.params.b);
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).send({ result: subtract(num2, num1) });
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  const num1 = parseInt(req.body.a);
  const num2 = parseInt(req.body.b);
  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
    : res.status(200).send({ result: multiply(num2, num1) });
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (a === 0) {
    res.status(200).send({ result: 0 });
  }
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;

  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (a === 0) {
    res.status(200).send({ result: 0 });
  }
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: remainder(a, b) });
});

module.exports = app;
