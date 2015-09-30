$(document).ready(function()

 {
   therm = new Thermostat();

   $('#output').html(therm.temp);
   // document.getElementById('#output')

   // $('#output').html('Hello World');
   // $('#temp_up').click(function(event) {
   //
   // });

   $('#temp_up').click(function() {
     therm.increaseByOne();
     $('#output').html(therm.temp);
   });

 });
