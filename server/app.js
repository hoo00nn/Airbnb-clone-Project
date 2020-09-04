const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const {port} = require('./env');
const users = require('./routes/users');
const auth = require('./routes/auth');
const register = require('./routes/register');
const { checkSession } = require('./middlewares/session');

app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'pug');
// use 함수는 모든 요청에 대응
// 모든 요청에 use함수안에 있는 미들웨어를 사용해주세요 라는 의미
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(checkSession);

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.render('index', {login : req.login});
});

app.use('/users', users);
app.use('/auth', auth);
app.use('/register', register);


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send(err.message);
});