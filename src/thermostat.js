function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  // this.DEFAULT_MAX_TEMP = 25;
  // this.maximumTemperature = this.DEFAULT_MAX_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.increaseByOne = function() {
  console.log(Thermostat.prototype);
  this.temp += 1;
};

Thermostat.prototype.decreaseByOne = function() {
  if (this.temp <= this.minTemp) {
    throw new Error("Minimum temperature reached");
  } else {
    console.log(this.temp);
    this.temp -= 1;
  }
};

Thermostat.prototype.turnOffPowerSavingMode  = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnOnPowerSavingMode  = function() {
  this.powerSavingMode = true;
};
