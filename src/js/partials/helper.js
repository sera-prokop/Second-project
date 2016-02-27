
//-------- Initialization -------------

$(document).ready(function(){

  if($('.shop').length){
    radioButton.init();
  }

  if($('.aside-wrapper').length){
    checkBox.init();
  }

  if($('.sorting-sel__sel').length){
    select.init();
  }

  if($('.information__p').length){
    columnizer.init();
  }

  if($('.view__link').length){
    tabSwitch.init();
  }

  if($('#slider').length){
    slider.init();
  }

  if($('.aside-wrapper-click').length){
    akkordeon.init();
  }

  if($('.img-small').length){
    imagesSwitch.init();
  }

});
