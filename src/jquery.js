$(document).ready(function()

  {
    therm = new Thermostat();

    $('#output').css('color', 'gold');
    $('#output').html(therm.temp);


    $('#temp_up').click(function() {
      try {
        therm.increaseByOne();
        if (therm.temp < 18) {
          $('#output').css('color', 'green');
        } else if (therm.temp >= 18 && therm.temp < 25) {
          $('#output').css('color', 'gold');
        } else {
          $('#output').css('color', 'red');
        }
        $('#output').html(therm.temp);
      } catch (e) {
        var errorMessage = e.message;
        $('#errors').html(errorMessage);
      } finally {
        $('#errors').html(errorMessage);


      }
    });

    $('#temp_down').click(function() {
      therm.decreaseByOne();
      if (therm.temp < 18) {
        $('#output').css('color', 'green');
      } else if (therm.temp >= 18 && therm.temp < 25) {
        $('#output').css('color', 'gold');
      } else {
        $('#output').css('color', 'red');
      }
      $('#output').html(therm.temp);
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
      $('#output').html(therm.temp);
      $('#output').css('color', 'gold');
    });

    // GET ERRORS PRINTED ON BROWSER! //

  });
// $('#powerSave').prop('checked', true) {
//   therm.turnOnPowerSavingMode();
