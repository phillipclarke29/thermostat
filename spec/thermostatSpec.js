describe("Thermostat", function() {
  var temp;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it("should start at 20C", function() {
    expect(thermostat.temp).toEqual(20);

  });

  it("should increase the temperature by one when the increase button is pushed",
    function() {
      thermostat.increaseByOne();
      expect(thermostat.temp).toEqual(21);
    });

  it("should decrease the temperature by one when the decrease button is pushed", function() {
    thermostat.decreaseByOne();
    expect(thermostat.temp).toEqual(19);
  });
});
