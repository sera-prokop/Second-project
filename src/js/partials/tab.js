//------------ Tab --------------

var tabSwitch = (function(){

  return{
    init: function(){
      $('.view__link').on('click', function(e){
        e.preventDefault();
        var swTab = $(this).attr('data-class');
        $('#tab').removeClass().addClass(swTab);

        $('.view__link').find('span').removeClass('view--active');
        $(this).find('span').addClass('view--active');
      });
    }
  }
}());