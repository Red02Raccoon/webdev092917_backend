const nodemailer = require("nodemailer");
const config = require("../config.json");
const smtpTransp = require("nodemailer-smtp-transport");


//метод получение страницы works______________________________________________________
module.exports.getWorks = function(req, res) {
  //описываем один из методов конроллера
  res.render("pages/works", { msg: req.query.msg }); //первый параметр это путь к странице pug
};



//метод получение для отправки письма из сайта________________________________________
module.exports.sendEmail = function(req, res) {
    //требуем наличия имени, обратной почты и текста
    if (!req.body.nameUser || !req.body.email || !req.body.text) {
      //если что-либо не указано - сообщаем об этом
      return res.redirect('/works?msg=Все поля нужно заполнить!'); //переводим на корень и передаем переменную в адресную строку
    }
     //инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  
    const mailOptions = {
      from: `"${req.body.nameUser}" <${req.body.email}>`,
      to: config.mail.smtp.auth.user,
      subject: config.mail.subject,
      text: req
        .body
        .text
        .trim()
        .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
    };
  
    //отправляем почту
    transporter.sendMail(mailOptions, function (error, info) {
      //если есть ошибки при отправке - сообщаем об этом
      if (error) {
        return res.redirect('/works?msg=При отправке письма произошла ошибка');
      }
      res.redirect('/works?msg=Письмо успешно отправлено');
    });
  }
