class SensorData {
    constructor(temperature, humidity, motion) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.motion = motion;
      this.alert = false;
    }
  
    updateMotion(status) {
      this.motion = status;
      this.alert = status;
    }
  }
  
  module.exports = SensorData;