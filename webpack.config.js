const path = require('path');
module.exports = {
    entry: './src/index.ts',
    // specify which files, use which rules to compile
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        // this is the absolute path
        path: path.resolve(__dirname, 'public'),
    }
}