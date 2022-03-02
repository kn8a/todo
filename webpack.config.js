const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

//  module: {
//    rules: [
//      
//      {
//        test: /\.(jpg|png)$/,
//        use: {
//          loader: 'url-loader',
//        },
//      },
//    ],
//  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader'
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
        filename: 'images/[hash][ext]'
        },
      },

    ],
  },
};