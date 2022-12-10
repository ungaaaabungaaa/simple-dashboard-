const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      datasets: [{
        label: 'claps',
        data: [120, 109, 23, 85, 22, 33],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });