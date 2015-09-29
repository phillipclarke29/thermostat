function Thermostat() {
  this.temp = 20;
  this.tempMin = 10;
}

Thermostat.prototype.increaseByOne = function() {
  console.log(Thermostat.prototype);
  this.temp += 1;
};

Thermostat.prototype.decreaseByOne = function() {
  if (this.temp <= this.tempMin) {
    throw new Error("Minimum temperature reached");
  } else {
    console.log(this.temp)
    this.temp -= 1;

  }

};
