const formidable = require('formidable');
const fs = require('fs');
const path = require('path');


//метод получение страницы admin
module.exports.getAdmin = function(req, res) { //описываем один из методов конроллера
    res.render('pages/admin_1'); //первый параметр это путь к странице pug
};

//метод получение страницы admin_2
module.exports.getAdmin_2 = function(req, res) { //описываем один из методов конроллера
    res.render('pages/admin_2', {msgblog: req.query.msgblog,}); //первый параметр это путь к странице pug
};


const http = require('request');// позволяет делать типо adjax запросов
const apiOptions = {
  server: "http://localhost:3000" //прописываем адрес домена на продакшене 
}

module.exports.addArticle = function (req, res) {
  const pathApi = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "POST",
    json: {
      title: req.body.title,
      date: req.body.date,
      text: req.body.text
    }
  };
  http(requestOptions, function (error, response, body) {
    res.redirect('/admin_2?msgblog=' + body.status);
  });
}

//метод получение страницы admin_3
module.exports.getAdmin_3 = function(req, res) { //описываем один из методов конроллера
    res.render('pages/admin_3', {msgfile: req.query.msgfile}); //первый параметр это путь к странице pug
};
