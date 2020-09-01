const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const users = require('./routes/users');
const login = require('./routes/login');
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
  res.render('index');
})

app.use('/users', users);
app.use('/login', login);
app.use('/register', register);