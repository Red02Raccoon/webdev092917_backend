const express = require('express');
const router = express.Router();


// устанавливается втором параметром (где нужно) для запрета доступа без логина
// const isAdmin = (req, res, next) => {
//     // если в сессии текущего пользователя есть пометка о том, что он является
//     // администратором
//     if (req.session.isAdmin) {
//       //то всё хорошо :)
//       return next();
//     }
//     //если нет, то запрещаем доступ к API
//     res.status(403).json({message: 'Access denied'});
//   };

const ctrlBlog = require('../controllers/blog');
const ctrlUser = require('../controllers/user'); // подключение контроллера
// const ctrlAvatar = require('../controllers/avatar');

router.get('/blog', /*isAdmin,*/ ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog/:id', ctrlBlog.editArticle);
router.delete('/blog/:id', ctrlBlog.deleteArticle);

router.post('/user', ctrlUser.isAuth); // обработка запроса

// router.get('/avatar', ctrlAvatar.getAvatar);
// router.post('/avatar', ctrlAvatar.setAvatar);


module.exports = router;//пробрасывае роута для app.js