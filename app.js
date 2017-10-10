var express = require('express');
var path = require('path');//работа с путями
var favicon = require('serve-favicon'); 
var logger = require('morgan'); //для серверных логов
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./api/models/db'); //подключение базы данных


//модули для авторизации
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);// для сохранения сессии в базе данных


//прописывание путей к роутам
var index = require('./routes/index');
var indexApi = require('./api/routes/index');


//создание экспрес приложения
var app = express();

// устанавливаем в качестве шаблонизатора pug
app.set('views', path.join(__dirname, 'views'));//прописывание путей к шаблонамж __dirname - текущий каталог, join - соединение путей
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//подключение статики


// настройки для express session
app.use(session({
  secret: 'secretmy',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: null //время хранения сессии, жизни cookie
  },
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}) //сохранение сессии
})); 


//подключение роутов
// пришел запрос на / СРАБОТАЕТ РОУТЕР index
app.use('/', index);
app.use('/api', indexApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);//пробрасываем ошибку дальше если файла не нашли (404)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);//500 - серверу хана, ошибка сервера
  res.render('error');
});

module.exports = app; //экспортим приложение(запуск)
