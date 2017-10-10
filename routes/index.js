const express = require('express');
const router = express.Router();


const ctrlHome = require("../controllers/homepage");
const ctrlBlog = require('../controllers/blog');
const ctrlAdmin = require('../controllers/admin');
const ctrlAbout = require('../controllers/about');
const ctrlWorks = require('../controllers/works');

// подключение контроллера и его метода 
router.get('/', ctrlHome.getIndex);
router.post('/', ctrlHome.authorization);

router.get('/blog', ctrlBlog.getBlog);

router.get('/admin', ctrlAdmin.getAdmin);
router.get('/admin_2', ctrlAdmin.getAdmin_2);
router.post('/admin_2/blog', ctrlAdmin.addArticle);

// подключение контроллера и его метода 
router.get('/admin_3', ctrlAdmin.getAdmin_3);


router.get('/about', ctrlAbout.getAbout);

// подключение контроллера и его метода 
router.get('/works', ctrlWorks.getWorks);
router.post('/message', ctrlWorks.sendEmail);


module.exports = router;
