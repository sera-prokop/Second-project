//------------ Columnizer --------------

var columnizer = (function(){

  return{
    init: function(){
      $('.information__p').columnize({ columns: 2 });
      $('.information__title').addClass('removeiffirst');;
      $('.info').addClass('dontsplit');
    }
  }
}());