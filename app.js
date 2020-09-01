const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const users = require('./routes/users');
const login = require('./routes/login');

app.set('view engine', 'pug');
app.use(express.json());

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/users', users);
app.use('/login', login);