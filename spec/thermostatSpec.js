describe("Thermostat", function() {
  var temp;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it("should start at 20C", function() {
    expect(thermostat.temp).toEqual(20);

  });

  it("should increase the temperature when the increase button in pushed",
    function() {
      thermostat.increaseByOne();
      expect(thermostat.temp).toEqual(21);


    });
});
