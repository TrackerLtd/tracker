module.exports = {
    entry: "./entry.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['react', 'es2015']
         }
       },
       { 
         test: /\.css$/, 
         loader: ('style!css')
       }
      ]
    },
    devServer: {
      historyApiFallback: true
    }
};
