/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
            'Saturday',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
      ],
      datasets: [{
        data: [
          15349,
          21345,
          18483,
          24003,
          20489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
          borderColor: '#C5A97F',
        borderWidth: 4,
          pointBackgroundColor: '#C5A97F'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
