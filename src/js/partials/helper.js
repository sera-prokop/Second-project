//---------- Radiobutton ----------

$('.shop').find('.shop__radio').each(function(){
  $(this).on('click', function(){
    var valueRadio = $(this).html();
    $(this).parent().find('.shop__radio').removeClass('shop__radio--active');
    $(this).addClass('shop__radio--active');
    $(this).parent().find('.shop__input').val(valueRadio);
  });
});

//----------- Checkbox brends----------


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


//----------- Checkbox os----------


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

//----------- Select -----------


$(document).ready(function(){
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
});



//------------ Columnizer --------------


$('.information__p').columnize({ columns: 2 });
$('.information__title').addClass('removeiffirst');;
$('.info').addClass('dontsplit');




//------------ Tab --------------


$(document).ready(function(){
  $('.view__link').on('click', function(e){
    e.preventDefault();
    var swTab = $(this).attr('data-class');
    $('#tab').removeClass().addClass(swTab);

    $(this).closest('.view__item').addClass('view__item--active');
    $(this).closest('.view__item').siblings().removeClass('view__item--active');

  });
});

//------------- Slider ----------------


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

//----------- Аккордеон --------------



$(document).ready(function(){
  $('.arrow').on('click', function(e){
    $(this).siblings('.aside-wrapper').slideToggle().stop(true, true);
    $(this).toggleClass('arrow2');
    $(this).siblings('.aside-form-title').toggleClass('aside-form-title2');

  });
});


//------------- Images --------------


$(document).ready(function(){
  $('.img-small').on('click', function(e){
    var imgBig = $(this).closest('.block-left').find('.img-big').find('img');
    var src = $(this).find('img').attr('src');
    imgBig.fadeOut(0, function(){
      $(this).attr('src', src).fadeIn(0);
    })
 });
});