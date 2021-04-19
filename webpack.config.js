const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
	output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'cornerstoneTools-SyncBrushTool',
      type: 'umd',
      umdNamedDefine: true,
    },
    clean: true,
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  externals: {
    'cornerstone-core': 'cornerstone-core',
    'cornerstone-tools': 'cornerstone-tools',
  }
};
