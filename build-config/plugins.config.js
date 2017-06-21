const path =  require('path');
const webpack =  require('webpack');

module.exports = {
    entry: {
      'plugins/regions': './src/plugins/regions',
      'plugins/timeline': './src/plugins/timeline',
      'plugins/minimap': './src/plugins/minimap'
    },

    output: {
        path: path.join(__dirname, '../lib'),
        library: ['Wavesurfer', '[name]'],
        filename: '[name].js',
        libraryTarget: 'umd'
    },

    module: {
      preLoaders: [
        {
          test:    /\.jsx?/,
          exclude: /node_modules|lib/,
          loaders: ['eslint', 'jscs'],
          include: path.join(__dirname, '../')
        }
      ],
      loaders: [
        {test: /\.js$/, loader: 'babel-loader'}
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    externals: [
      {
        'react': {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        },
        'wavesurfer.js': {
          root: 'WaveSurfer',
          commonjs2: 'wavesurfer.js',
          commonjs: 'wavesurfer.js',
          amd: 'wavesurfer'
        },
        'wavesurfer': {
          root: 'WaveSurfer',
          commonjs2: 'wavesurfer.js',
          commonjs: 'wavesurfer.js',
          amd: 'wavesurfer'
        },
        'react-measure': {
          root: 'Measure',
          commonjs2: 'react-measure',
          commonjs: 'react-measure',
          amd: 'react-measure'
        }
      }
    ],

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
};
