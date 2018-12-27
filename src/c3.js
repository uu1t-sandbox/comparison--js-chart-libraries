import 'c3/c3.min.css'
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
        ['割合1', 80, 82, 85, 90],
        ['割合2', 20, 18, 15.3, 12.5]
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
      y2: {
        show: true
      }
    }
  })
})
