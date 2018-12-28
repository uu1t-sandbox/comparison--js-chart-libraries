const path = require('path')

const BrotliPlugin = require('brotli-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const zopfli = require('@gfx/zopfli')

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
      plugins: [
        new CompressionPlugin({
          algorithm(input, compressionOptions, callback) {
            return zopfli.gzip(input, compressionOptions, callback)
          }
        }),
        new BrotliPlugin()
      ]
    }
  }

  return config
}
