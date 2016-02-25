
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

//----------- Checkbox brends----------

var checkBrends = (function(){

  return{
    init: function(){
      $('.brends__link').on('click', function(e){
        e.preventDefault()
        $('.brends').find('.brends__check').removeClass('brends__check--active');
        $('.brends').find('.brends__input').prop('checked', false);
      });

      $('.brends').find('.brends__check').on('click', function(){
        if($(this).find('.brends__input').prop('checked')){
          $(this).removeClass('brends__check--active');
          $(this).find('.brends__input').prop('checked', false);
        }else{
          $(this).addClass('brends__check--active');
          $(this).find('.brends__input').prop('checked', true);
        }
      });
    }
  }
}());

//----------- Checkbox os-------------

var checkOs = (function(){

  return{
    init: function(){
      $('.os__link').on('click', function(e){
        e.preventDefault();
        $('.os').find('.os__check').removeClass('os__check--active');
        $('.os').find('.os__input').prop('checked', false);
      });

      $('.os').find('.os__check').on('click', function(){
        if($(this).find('.os__input').prop('checked')){
          $(this).removeClass('os__check--active');
          $(this).find('.os__input').prop('checked', false);
        }else{
          $(this).addClass('os__check--active');
          $(this).find('.os__input').prop('checked', true);
        }
      });
    }
  }
}());

//----------- Select -------------

var selectSt = (function(){

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

//------------ Columnizer --------------

var columnizerSt = (function(){

  return{
    init: function(){
      $('.information__p').columnize({ columns: 2 });
      $('.information__title').addClass('removeiffirst');;
      $('.info').addClass('dontsplit');
    }
  }
}());

//------------ Tab --------------

var tabSt = (function(){

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

//------------- Slider ----------------

var sliderSt = (function(){

  return{
    init: function(){
      $( "#slider" ).slider({
        range: true,
        min: 0,
        max: 15000,
        values: [ 1000, 13000 ],
        slide: function( event, ui ) {
              $( "#amount" ).val(ui.values[ 0 ]);
              $( "#amount2" ).val(ui.values[ 1 ] );
            }
      });
      $( "#amount" ).val($( "#slider" ).slider( "values", 0 ) );
      $( "#amount2" ).val($( "#slider" ).slider( "values", 1 ) );
    }
  }
}());

//----------- Аккордеон --------------

var akkordeonSt = (function(){

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

//------------- Images --------------

var imagesSt = (function(){

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

//-------- Initialization -------------

$(document).ready(function(){

  if($('.shop').length){
    radioButton.init();
  }

  if($('.brends').length){
    checkBrends.init();
  }

  if($('.os').length){
    checkOs.init();
  }

  if($('.sorting-sel__sel').length){
    selectSt.init();
  }

  if($('.information__p').length){
    columnizerSt.init();
  }

  if($('.view__link').length){
    tabSt.init();
  }

  if($('#slider').length){
    sliderSt.init();
  }

  if($('.aside-wrapper-click').length){
    akkordeonSt.init();
  }

  if($('.img-small').length){
    imagesSt.init();
  }

});
