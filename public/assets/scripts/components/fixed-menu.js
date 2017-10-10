let scrollMenu = (function() {
    const article = $('.article');
    const itemMenu = $('.article-list__item');
    const wrapper = $('.wrapper');

    let positionArticle = [];
    let offsetHeight = 0; 
  
    _setPositionArticle = function(element) {
      const len = element.length;
      element.each(function(i) {
        positionArticle[i] = {};
        positionArticle[i].top = $(this).offset().top - offsetHeight;
        positionArticle[i].bottom =
          positionArticle[i].top + $(this).innerHeight();
      });
    };
  
    _scrollPageFixMenu = function(e) {
      let scroll = window.pageYOffset;
      if (scroll < article.offset().top) {
        wrapper.removeClass('fixed');
      } else {
        wrapper.addClass('fixed');
      }
    };
  
    _scrollPage = function(e) {
      let scroll = window.pageYOffset;
      positionArticle.forEach( (element, index) => {
        if (
          scroll >= element.top &&
          scroll <= element.bottom
        ) {
          itemMenu
            .eq(index)
            .addClass('article-list__item--active')
            .siblings()
            .removeClass('article-list__item--active');
        }
      });
    };
  
    _clickMenu = function(e) {
      let $element = $(e.target).parent();
      let index = $element.index();
      let sectionOffset = positionArticle[index].top;
  
      $(document).off('scroll', _scrollPage);
      $element.siblings().removeClass('article-list__item--active');
      $('body, html').animate(
        {
          scrollTop: sectionOffset
        },
        1000,
        function() {
          $element.addClass('article-list__item--active');
          $(document).on('scroll', _scrollPage);
        }
      );
    };
  
    addListener = function() {
      $('.article-list').on('click', _clickMenu);

      $(document).on('scroll', _scrollPage);
      $(document).on('scroll', _scrollPageFixMenu);
  
      $(window).on('load', function(e) {
        _setPositionArticle(article);
      });
      $(window).on('resize', function(e) {
        _setPositionArticle(article);
      });
    };
  
    return {
      init: addListener
    };
  })();
  
  scrollMenu.init();