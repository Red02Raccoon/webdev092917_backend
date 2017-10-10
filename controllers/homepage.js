const http = require('request');
const apiOptions = {
  server: "http://localhost:3000"
};


//метод получение страницы index
module.exports.getIndex = function(req, res) {//описываем один из методов конроллера
  // if (req.session.isAdmin) { //если cookie сохранены то не нужен ввод данных
  //   return res.redirect('/admin');
  // } 
    res.render('pages/index', { msg: req.query.msg }); //первый параметр это путь к странице pug
};


//метод обрабатывает авторизацию пользователя
module.exports.authorization = function (req, res) {
    //требуем наличия логина и пароля в теле запроса
    if (!req.body.login || !req.body.password) {
      //если не указан логин или пароль - сообщаем об этом
      return res.redirect('/?msg=Все поля обязательны к заполнению!');
    }
  // проверяем введенные логин и пароль с создаными через консольное приложение addUser.js
    const pathApi = '/api/user';
    const requestOptions = {
      url: apiOptions.server + pathApi,
      method: "POST",
      json: { //login и password из формы на клиенте
        login: req.body.login,
        password: req.body.password
      }
    };

    http(requestOptions, function (error, response, body) {
      if (body.status === 'err') {
        return res.redirect(`/?msg=${body.message}`);
      }
      req.session.isAdmin = true; // если все хорошо - сохраняем сессию для дальнейшего входа без подтверждения
      res.redirect('/admin');
    });
}