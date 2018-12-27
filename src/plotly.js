import Plotly from 'plotly.js-basic-dist'

document.addEventListener('DOMContentLoaded', () => {
  const x = ['2015/07', '2016/07', '2017/07', '2018/07']

  Plotly.plot(
    document.getElementById('chart'),
    [
      {
        name: '人数1',
        type: 'bar',
        x,
        y: [16, 15, 15, 17]
      },
      {
        name: '人数2',
        type: 'bar',
        x,
        y: [100, 120, 135, 150]
      },
      {
        name: '割合1',
        type: 'scatter',
        x,
        y: [0.8, 0.82, 0.85, 0.9],
        yaxis: 'y2'
      },
      {
        name: '割合2',
        type: 'scatter',
        x,
        y: [0.2, 0.18, 0.153, 0.125],
        yaxis: 'y2'
      }
    ],
    {
      barmode: 'stack',
      margin: { t: 16 },
      xaxis: {
        fixedrange: true
      },
      yaxis: {
        fixedrange: true
      },
      yaxis2: {
        fixedrange: true,
        showgrid: false,
        overlaying: 'y',
        side: 'right',
        range: [0, 1],
        tickformat: '%',
        hoverformat: '.1%'
      },
      legend: {
        orientation: 'h',
        x: 0.5,
        xanchor: 'center'
      }
    },
    { displayModeBar: false }
  )
})
