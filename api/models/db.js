const mongoose = require('mongoose');
const config = require('../../config');

mongoose.Promise = global.Promise;//подключение промиса в global

mongoose
.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {useMongoClient: true})
.catch(e => {
  console.error(e);
  throw e;
});

mongoose
.connection
.on('connected', function () { //событие
  console.log(`Mongoose default connection open mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
});

// If the connection throws an error -если при соединении произошла ошибка
mongoose
.connection
.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose
.connection
.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () { //обработка прерывания события и отключение mongoose
  mongoose
    .connection
    .close(function () {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
});


//подключение схем
require('./blog');
// require('./avatar');
require('./user');