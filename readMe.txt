1. In this serie we use webpack for compiling .ts files to .js files.

2. we should install these packages:

        npm install webpack webpack-cli ts-loader -D

3. ts-loader teaches webpack how to compile ts to js

4. Eventhough we have installed typescript globally we have to install it locally as
    Dev dependecies to webpack works correctly.

5. We will write all our .ts files in scr folder and later webpack will bundle all 
    our files into a single js file in public folder.

6. To use webpack we have to make webpack.config.js file.

[ATTENTION] The naming is important

7. You have to specify the input and outfile in webpack.config.js file.

    const path = require('path')
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
            filename: 'bundle.js',
            // this is the absolute path
            path: path.resolve(__dirname, 'public'),
        }
    }

8. Then to run the webpack we have to make script in package.json file then
    run it using npm run <optional name>: 

        {
            "name": "typescript-webpack",
            "version": "1.0.0",
            "description": "1. In this serie we use webpack for compiling .ts files to .js files.",
            "main": "index.js",
            "scripts": {
                // you can call it anything you want build is optional
                "build": "webpack",
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
                "ts-loader": "^7.0.5",
                "typescript": "^3.9.5",
                "webpack": "^4.43.0",
                "webpack-cli": "^3.3.11"
            }
        }

9. Webpack has webpack development server, to use it, first you have to install it:

        a. npm install webpack-dev-server

        b. make new script in package.json file: 

            "<optinal name>": "webpack-dev-server"

        c. npm run <otional name>

10. In this way, if we change the src files, the compile will be happened but it is 
    not going to be saved on the .js file, in order to save it and have realtime 
    sever we have to add publicPath to the output object in webpack.config.js file:

        output: {
            publicPath: 'public',
            filename: 'bundle.js',
            // this is the absolute path
            path: path.resolve(__dirname, 'public'),
        }