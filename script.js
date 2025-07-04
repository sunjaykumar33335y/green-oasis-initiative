async function fetchStatus() {
    const response = await fetch('/api/status');
    const data = await response.json();
    document.getElementById('temp').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;
    document.getElementById('motion').textContent = data.motion ? 'Active' : 'Inactive';
    if (data.alert) document.getElementById('alerts').textContent = 'Intrusion Detected!';
  }
  
  function toggleLight() {
    fetch('/api/control/light', { method: 'POST' })
      .then(() => fetchStatus());
  }
  
  function adjustTemp() {
    fetch('/api/control/temp', { method: 'POST' })
      .then(() => fetchStatus());
  }
  
  setInterval(fetchStatus, 5000); // Cập nhật mỗi 5 giây
  fetchStatus(); // Lấy dữ liệu ban đầu