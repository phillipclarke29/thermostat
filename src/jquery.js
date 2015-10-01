$(document).ready(function()

  {
    therm = new Thermostat();

    var errorMessage = '';

    var displayTemp = (function() {
      $('#output').html(therm.temp);
      $('#output').css('color', therm.tempColour());
    });

    displayTemp();

    // var myjson;
    // $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk",
    //   function(json) {
    //     myjson = json;
    //
    //     function showWeather() {
    //       document.getElementById("outsideTemp").innerHTML =
    //         "The temperature in London is: " + JSON.stringify(myjson.main.temp -
    //           273.15) + "ºC";
    //     };
    //
    //     showWeather();
    //
    //
    //   });

    $.ajax({

      type: 'GET',
      dataType: 'json',
      url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk",
      data: {
        get_param: 'value'
      },
      success: function(data) {
        var weather = data
        console.log(weather.main.temp)

        $('#outsideTemp').html((weather.main.temp) - 273.15);

        //
      },
    });



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
      // $('#output').css('color', 'gold');
    });

    // GET ERRORS PRINTED ON BROWSER! //

  });
// $('#powerSave').prop('checked', true) {
//   therm.turnOnPowerSavingMode();
