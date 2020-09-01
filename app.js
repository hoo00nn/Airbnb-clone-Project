const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const users = require('./routes/users');
const auth = require('./routes/auth');
const register = require('./routes/register');

app.set('view engine', 'pug');
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}))

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.redirect('/auth/login');
})

app.use('/users', users);
app.use('/auth', auth);
app.use('/register', register);