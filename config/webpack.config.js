const path = require('path');

module.exports = {
    entry: './src/components/LoadScroll.jsx',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'],
                exclude: /(node_modules|build)/
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },
    externals: {
        // La linea de aqui abajo es solo para indicar que vamos a utilizar la dependencia "React" de parent-testing-project.
        'react': 'commonjs react'
    }
}