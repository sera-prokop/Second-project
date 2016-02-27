//----------- Select -------------

var select = (function(){

  return{
    init: function(){
      $('.sorting-sel__sel').styler({
        onSelectOpened: function() {
          var selectB = $(this).find('.jq-selectbox__trigger-arrow');
          selectB.addClass('jq-selectbox__trigger-arrow1')
          },
        onSelectClosed: function() {
          var selectB = $(this).find('.jq-selectbox__trigger-arrow');
          selectB.removeClass('jq-selectbox__trigger-arrow1')
          }
      });
    }
  }
}());