'use strict';

const mongoose = require('mongoose'), //подключаем mongoose
  Schema = mongoose.Schema,//подключаем схему
  BlogSchema = new Schema({ //создаем схему
    title: {
      type: String,
      required: [true, 'Укажите заголовок статьи'] //обязательное поле required
    },
    body: {
      type: String,
      required: [true, 'Укажите содержимое статьи'] //обязательное поле required
    },
    date: {
      type: Date, //тип данных
      default: Date.now,//значение по умолчанию, если ничего не введем применится
      required: [true, 'Укажите дату публикации'] //обязательное поле required
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('blog', BlogSchema);