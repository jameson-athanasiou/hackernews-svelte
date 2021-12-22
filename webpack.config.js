/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            // eslint-disable-next-line global-require
            preprocess: require('svelte-preprocess')(),
          },
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  stats: {
    colors: true,
    entrypoints: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'public/index.html'),
    //   filename: 'index.html',
    // }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.js', '.ts', '.svelte', '.mjs'],
  },
}
