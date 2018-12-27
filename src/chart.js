import Chart from 'chart.js'

import colors from './colors'

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('chart').getContext('2d')

  const data = {
    labels: ['2015/7', '2016/7', '2017/7', '2018/7'],
    datasets: [
      {
        type: 'line',
        label: '割合1',
        fill: false,
        data: [80, 82, 85, 90],
        backgroundColor: colors.black,
        borderColor: colors.black,
        yAxisID: 'y2'
      },
      {
        type: 'line',
        label: '割合2',
        fill: false,
        data: [20, 18, 15.3, 12.5],
        backgroundColor: colors.red,
        borderColor: colors.red,
        yAxisID: 'y2'
      },
      {
        label: '人数1',
        data: [16, 15, 15, 17],
        backgroundColor: colors.pink,
        borderColor: colors.pink,
        yAxisID: 'y1'
      },
      {
        label: '人数2',
        data: [100, 120, 135, 150],
        backgroundColor: colors.sky,
        borderColor: colors.sky,
        yAxisID: 'y1'
      }
    ]
  }

  new Chart(ctx, {
    type: 'bar',
    data,
    options: {
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            id: 'y1',
            position: 'left',
            stacked: true,
            ticks: {
              maxTicksLimit: 5
            }
          },
          {
            id: 'y2',
            position: 'right',
            ticks: {
              beginAtZero: true,
              max: 100,
              maxTicksLimit: 5,
              stepSize: 20,
              callback: value => value + '%'
            },
            gridLines: {
              drawOnChartArea: false
            }
          }
        ]
      }
    }
  })
})
