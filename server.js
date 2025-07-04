const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Mô phỏng dữ liệu cảm biến
let sensorData = {
  temperature: 22,
  humidity: 50,
  motion: false,
  alert: false
};

app.get('/api/status', (req, res) => {
  res.json(sensorData);
});

app.post('/api/control/light', (req, res) => {
  // Mô phỏng bật/tắt đèn
  console.log('Toggled light');
  res.sendStatus(200);
});

app.post('/api/control/temp', (req, res) => {
  // Mô phỏng điều chỉnh nhiệt độ
  sensorData.temperature = Math.max(18, Math.min(28, sensorData.temperature + 1));
  res.sendStatus(200);
});

// Mô phỏng lưu trữ đám mây và báo cáo
setInterval(() => {
  sensorData.motion = Math.random() > 0.7;
  sensorData.alert = sensorData.motion;
}, 10000);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});