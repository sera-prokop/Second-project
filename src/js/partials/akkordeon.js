//----------- Аккордеон --------------

var akkordeon = (function(){

  return{
    init: function(){
      $('.aside-wrapper-click').on('click', function(e){
        e.preventDefault();
        $(this).siblings('.aside-wrapper').slideToggle().stop(true, true);
        $(this).find('.arrow').toggleClass('arrow2');
        $(this).find('.aside-form-title').toggleClass('aside-form-title2');
      });
    }
  }
}());