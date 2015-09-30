function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 32;
  this.powerSavingModeMax = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.increaseByOne = function() {
  if (this.temp === this.powerSavingModeMax) {
    throw new Error("Power Saving Mode on, maximum temperature reached");
  } else {
    this.temp += 1;
  }
};

Thermostat.prototype.decreaseByOne = function() {
  if (this.temp <= this.minTemp) {
    throw new Error("Minimum temperature reached");
  } else {
    this.temp -= 1;
  }
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.turnOnPowerSavingMode = function() {
  this.powerSavingMode = true;
};
