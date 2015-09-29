function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.increaseByOne = function() {
  console.log(Thermostat.prototype);
  this.temp += 1;
};

Thermostat.prototype.decreaseByOne = function() {
  console.log(Thermostat);
  this.temp -= 1;
  console.log(Thermostat.prototype);
};
