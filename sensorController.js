const SensorData = require('./sensorModel');

let sensor = new SensorData(22, 50, false);

const getStatus = (req, res) => {
  res.json(sensor);
};

const toggleLight = (req, res) => {
  console.log('Light toggled');
  res.sendStatus(200);
};

const adjustTemperature = (req, res) => {
  sensor.temperature = Math.max(18, Math.min(28, sensor.temperature + 1));
  res.sendStatus(200);
};

module.exports = { getStatus, toggleLight, adjustTemperature };