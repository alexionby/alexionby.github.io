$( document ).ready(function() {

    $( "header .menu" ).click(function() {
      $( "nav" ).slideToggle( "slow", function() {
        console.log('Clicked');
      });
    });
});
