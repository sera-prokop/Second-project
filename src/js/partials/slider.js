//------------- Slider ----------------

var slider = (function(){

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