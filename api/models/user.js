const mongoose = require('mongoose');
const crypto = require('crypto');//для шифрования данных с использовалием salt
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  hash: String, // это пароль+ случайные буквы - для замедления времени взлома
  salt: String // случайная строка
});

userSchema.methods.setPassword = function (password) { // к схеме можно добавлять методы
  this.salt = crypto
    .randomBytes(16)
    .toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 512, 'sha512') // смешиваем все 
    .toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

//просим mongoose сохранить модель для ее дальнейшего использования в db.js
mongoose.model('user', userSchema);