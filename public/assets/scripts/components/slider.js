
var Slider = function (container) {
    var  prevBtn = container.find('.prev'),
        nextBtn = container.find('.next'),
     
      items = prevBtn.find('.prev__item'),
      display = container.find('.view-site'), // Витрина слайдера
      title = container.find('.subtitle'),
      skills = container.find('.tech'),
      link = container.find('.button__link'),
      itemsLength = items.length,
      duration = 500,
      flag = true;
        this.counter = 0;
  
    // private Генерация разметки кнопки следующий слайд
    var generateMarkups = function () {
      var list = prevBtn.find('.prev__list'),
             markups = list.clone();
  
        nextBtn
        .append(markups);
    }
    // Вытащить данные из дата атрибутов для левой части слайдера
    var getDataArrays = function () {
      var dataObject = {
        pics: [],
        title: [],
        skills: [],
        link: []
      };
  
      $.each(items, function () {
        var $this = $(this);
  
        dataObject
          .pics
          .push($this.data('full'));
        dataObject
          .title
          .push($this.data('title'));
        dataObject
          .skills
          .push($this.data('skills'));
        dataObject
          .link
          .push($this.data('link'));
      });
  
      return dataObject;
    }
  
    var slideInLeftBtn = function (slide) {
      var reqItem = items.eq(slide - 1),
        activeItem = items.filter('.slide-active');
  
      activeItem
        .stop(true, true)
        .animate({
          'top': '100%'
        }, duration);
  
      reqItem
        .stop(true, true)
        .animate({
          'top': '0%'
        }, duration, function () {
          $(this)
            .addClass('slide-active')
            .siblings()
            .removeClass('slide-active')
            .css('top', '-100%')
        });
  
    }
  
    var slideInRightBtn = function (slide) {
      var items = nextBtn.find('.prev__item'),
        activeItem = items.filter('.slide-active'),
        reqSlide = slide + 1;
  
      if (reqSlide > itemsLength - 1) {
        reqSlide = 0;
      }
  
      var reqItem = items.eq(reqSlide);
  
      activeItem
        .stop(true, true)
        .animate({
          'top': '-100%'
        }, duration);
  
      reqItem
        .stop(true, true)
        .animate({
          'top': '0%'
        }, duration, function () {
          $(this)
            .addClass('slide-active')
            .siblings()
            .removeClass('slide-active')
            .css('top', '100%')
        });
    };
  
    var changeMainPicture = function (slide) {
      var image = display.find('.view-site__img');
      var data = getDataArrays();
  
      image
        .stop(true, true)
        .fadeOut(duration / 2, function () {
          image.attr('src', data.pics[slide]);
          $(this).fadeIn(duration / 2);
        });
    }
  
    var changeTextData = function (slide) {
      var data = getDataArrays();
      // название работы
        aviatitle.generate(data.title[slide], title, 'ru');

  
      // описание технологий
      aviatitle.generate(data.skills[slide], skills, 'en');
  
      // ссылка
      link.attr('href', data.link[slide]);
    }
  
    // public
    this.setDefaults = function () {
      var _that = this,

        data = getDataArrays();

      // создаем разметку
      generateMarkups();
  
      // левая кнопка
      nextBtn
        .find('.prev__item')
        .eq(_that.counter - 1)
        .addClass('slide-active');
  
      // правая кнопка
      prevBtn
        .find('.prev__item')
        .eq(_that.counter + 1)
        .addClass('slide-active');
  
      // основное изображение
      display
        .find('.view-site__img')
        .attr('src', data.pics[_that.counter]);
  
      // текстовые описания
      changeTextData(_that.counter);
  
    };
  
    this.moveSlide = function (direction) {
      var _that = this;
      var directions = {
        next: function () {
          // закольцовывание слайдера
          if (_that.counter < itemsLength - 1) {
            _that.counter++;
          } else {
            _that.counter = 0;
          }
        },
  
        prev: function () {
          if (_that.counter > 0) {
            _that.counter--;
          } else {
            _that.counter = itemsLength - 1;
          }
        }
      };
  
      directions[direction]();
  
      if (flag) {
        flag = false;
  
        if (typeof timeout != 'undefined') {
          clearTimeout(timeout);
        }
  
        timeout = setTimeout(function () {
          flag = true;
        }, duration + 50);
  
        slideInLeftBtn(_that.counter);
        slideInRightBtn(_that.counter);
        changeMainPicture(_that.counter);
        changeTextData(_that.counter);
      }
    };
  };
  



  var slider = new Slider($('.slider'));
  slider.setDefaults();
  
  $('.control__prev').on('click', function (e) {
    e.preventDefault();
    slider.moveSlide('prev');
  });
  
  $('.control__next').on('click', function (e) {
    e.preventDefault();
    slider.moveSlide('next');
  });


  

  