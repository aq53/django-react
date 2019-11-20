module.exports = {
    entry:'./leadmanager/frontend/src/index.js',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    output:{
        path: './leadmanager/frontend/static/frontend/',
        publicPath: '/',
        filename: 'main.js'
    }
}