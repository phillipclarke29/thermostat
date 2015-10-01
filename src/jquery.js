$(document).ready(function()

  {
    therm = new Thermostat();


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
        var errorMessage = e.message;
        $('#errors').html(errorMessage);
      } finally {
        $('#errors').html(errorMessage);
      }
    });

    $('#temp_down').click(function() {
      try {
        therm.decreaseByOne();
        displayTemp();
      } catch (e) {
        var errorMessage = e.message;
        $('#errors').html(errorMessage);
      } finally {
        $('#errors').html(errorMessage);
      }
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
      // $('#output').css('color', 'gold');
    });

    // GET ERRORS PRINTED ON BROWSER! //

  });
// $('#powerSave').prop('checked', true) {
//   therm.turnOnPowerSavingMode();
