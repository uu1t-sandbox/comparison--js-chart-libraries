import 'c3/c3.min.css'
import * as d3 from 'd3'
import c3 from 'c3'

import colors from './colors'

document.addEventListener('DOMContentLoaded', () => {
  c3.generate({
    bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x', '2015-07-01', '2016-07-01', '2017-07-01', '2018-07-01'],
        ['人数1', 16, 15, 15, 17],
        ['人数2', 100, 120, 135, 150],
        ['割合1', 0.8, 0.82, 0.85, 0.9],
        ['割合2', 0.2, 0.18, 0.153, 0.125]
      ],
      axes: {
        割合1: 'y2',
        割合2: 'y2'
      },
      types: {
        人数1: 'bar',
        人数2: 'bar'
      },
      groups: [['人数1', '人数2']],
      colors: {
        人数1: colors.pink,
        人数2: colors.sky,
        割合1: colors.black,
        割合2: colors.red
      }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y/%m'
        }
      },
      y: {},
      y2: {
        min: 0,
        max: 1,
        padding: {
          top: 0,
          bottom: 0
        },
        show: true,
        tick: {
          format: d3.format('.0%')
        }
      }
    },
    grid: {
      y: {
        show: true
      }
    },
    tooltip: {
      format: {
        value: (value, ratio, id) => {
          const format = id.startsWith('割合') ? d3.format('.1%') : d3.format('d')
          return format(value)
        }
      }
    }
  })
})
