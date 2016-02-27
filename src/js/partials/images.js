//------------- Images --------------

var imagesSwitch = (function(){

  return{
    init: function(){
      $('.img-small').on('click', function(e){
        var imgBig = $(this).closest('.block-left').find('.img-big').find('img');
        var src = $(this).find('img').attr('src');
        imgBig.fadeOut(0, function(){
        $(this).attr('src', src).fadeIn(0);
        })
     });
    }
  }
}());