//---------- Radiobutton ----------

var radioButton = (function(){

  return{
    init: function(){
      $('.shop').find('.shop__radio').each(function(){
        $(this).on('click', function(){
          var valueRadio = $(this).html();
          $(this).parent().find('.shop__radio').removeClass('shop__radio--active');
          $(this).addClass('shop__radio--active');
          $(this).parent().find('.shop__input').val(valueRadio);
        });
      });
    }
  }
}());