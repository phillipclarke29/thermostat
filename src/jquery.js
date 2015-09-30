$(document).ready(function()

  {
    therm = new Thermostat();

    $('#output').html(therm.temp);

    $('#temp_up').click(function() {
      therm.increaseByOne();
      $('#output').html(therm.temp);
    });

    $('#temp_down').click(function() {
      therm.decreaseByOne();
      $('#output').html(therm.temp);
    });

    $('input[type="checkbox"]').click(function() {
      if ($("#powerSave").is(":checked")) {
        therm.turnOnPowerSavingMode();
      } else if ($("#powerSave").is(":not(:checked)")) {
        therm.turnOffPowerSavingMode();
      }
      $('#output').html(therm.temp);
    });
    // };

    // $("#powerSave").click(function() {
    //    .toggle(therm.turnOffPowerSavingMode)
    // });
    //     therm.turnOnPowerSavingMode();
    // else
    //     therm.turnOffPowerSavingMode();


  });
// $('#powerSave').prop('checked', true) {
//   therm.turnOnPowerSavingMode();
