const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Seenu' }, { id: 2, name: 'Rahul' }];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website.html'));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('API running - port ' + PORT);
});