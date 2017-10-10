//метод получение страницы about
module.exports.getAbout = function(req, res) { //описываем один из методов конроллера
    res.render('pages/about'); //первый параметр это путь к странице pug
};