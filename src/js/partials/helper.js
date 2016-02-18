//---------- Radiobutton ----------

$('.shop').find('.shop__radio').each(function(){
  $(this).on('click', function(){
    var valueRadio = $(this).html();
    $(this).parent().find('.shop__radio').removeClass('shop__radio--active');
    $(this).addClass('shop__radio--active');
    $(this).parent().find('.shop__input').val(valueRadio);
  });
});

//----------- Checkbox ----------
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


