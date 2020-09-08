const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const {port} = require('./env');
const { checkSession } = require('./middlewares/session');

const indexRouter = require('./routes/index');
const api = require('./api/index');

app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(checkSession);
app.use('/', indexRouter);
app.use('/api', api);

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});

app.get('/', (req, res) => {
  res.render('index', {login : req.login});
});

module.exports = app;