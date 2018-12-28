const path = require('path')

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env, { mode = 'development' }) => {
  /**
   * @type {import('webpack').Configuration}
   */
  let config = {
    mode,
    entry: {
      c3: './src/c3',
      chart: './src/chart',
      plotly: './src/plotly'
    },
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        }
      ]
    }
  }

  if (mode === 'production') {
    config = {
      ...config,
      plugins: [new CompressionPlugin()]
    }
  }

  return config
}
