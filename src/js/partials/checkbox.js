//----------- Checkbox ------------

var checkBox = (function(){

  return{
    init: function(){
      $('.aside-wrapper__link').on('click', function(e){
        e.preventDefault()
        $(this).siblings('.aside-wrapper__check').removeClass('aside-wrapper__check--active');
        $('.aside-wrapper').find('.aside-wrapper__input').prop('checked', false);
      });

      $('.aside-wrapper').find('.aside-wrapper__check').on('click', function(){
        if($(this).find('.aside-wrapper__input').prop('checked')){
          $(this).removeClass('aside-wrapper__check--active');
          $(this).find('.aside-wrapper__input').prop('checked', false);
        }else{
          $(this).addClass('aside-wrapper__check--active');
          $(this).find('.aside-wrapper__input').prop('checked', true);
        }
      });
    }
  }
}());