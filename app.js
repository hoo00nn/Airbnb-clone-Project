const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;
const users = require('./routes/users');
const auth = require('./routes/auth');
const register = require('./routes/register');

app.set('view engine', 'pug');
// use 함수는 모든 요청에 대응
// 모든 요청에 use함수안에 있는 미들웨어를 사용해주세요 라는 의미
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.render('index');
  // res.redirect('/auth/login');
})

app.use('/users', users);
app.use('/auth', auth);
app.use('/register', register);