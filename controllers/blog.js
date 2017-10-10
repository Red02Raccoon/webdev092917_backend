const http = require('request');// позволяет делать типо adjax запросов
const apiOptions = {
  server: "http://localhost:3000" //прописываем адрес домена на продакшене 
}

module.exports.getBlog = function (req, res) {
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };
  //метод получение страницы blog
  http(requestOptions, function (error, response, body) {
    res.render('pages/blog', Object.assign(body));
  })

}


