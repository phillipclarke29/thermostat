$(document).ready(function()

  {
    therm = new Thermostat();

    var errorMessage = '';

    var displayTemp = (function() {
      $('#output').html(therm.temp);
      $('#output').css('color', therm.tempColour());
    });

    displayTemp();

    $('#temp_up').click(function() {
      try {
        therm.increaseByOne();
        displayTemp();
      } catch (e) {
        errorMessage = e.message;
      }
      $('#errors').html(errorMessage);
      errorMessage = 'No errors';
    });

    $('#temp_down').click(function() {
      try {
        therm.decreaseByOne();
        displayTemp();
      } catch (e) {
        errorMessage = e.message;
        $('#errors').html(errorMessage);
      }
      $('#errors').html(errorMessage);
      errorMessage = 'No errors';
    });


    $('input[type="checkbox"]').click(function() {
      if ($('#powerSave').is(':checked')) {
        therm.turnOnPowerSavingMode();
      } else if ($('#powerSave').is(':not(:checked)')) {
        therm.turnOffPowerSavingMode();
      }
      $('#output').html(therm.temp);
    });

    $('#reset').click(function() {
      therm.resetButton();
      displayTemp();
    });

    $('#submitCity').click(function() {
      $.ajax({
          type: 'GET',
          dataType: 'json',
          url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#myCity').val(),
          success: function(data) {
            if (data.cod == 200) {
              $('#outsideTemp').html((data.main.temp.toFixed(0)) - 273);
            } else {
              $('#outsideTemp').html('Invalid city!');
            }
          }
        });
    });

  });
// $('#powerSave').prop('checked', true) {