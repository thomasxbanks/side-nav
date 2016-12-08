module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname,
        filename: "src/js/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },{
            test: /\.html$/,
            loaders: ["raw-loader"]
        }]
    }
}
