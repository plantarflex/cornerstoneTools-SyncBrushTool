const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
	output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'SyncBrushTool',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default',
    },
    clean: true,
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  externals: {
    'cornerstone-core': 'cornerstone',
    'cornerstone-tools': 'cornerstoneTools',
  }
};
