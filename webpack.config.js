const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    module.exports = env => {
        
        const mode = env.NODE_ENV; 
        let plugins = []


         if(mode === 'production'){
                plugins = [
                        new MiniCssExtractPlugin({
                        filename: 'css/[name].css' 
                    })
                ]
           } 

         return{
            mode: mode,
            entry: {
                home: path.resolve(__dirname, 'src/js/home2.js')
            },
            output:{
                path: path.resolve(__dirname, 'dist/'),
                filename: 'js/bundle.js' 
            },
            devServer:{
                port: 9000
            },
           module:{
               rules:[

                    // Loader JS
                   {    
                      exclude: /(node_modules)/,
                      test: /\.js$/,
                        use:{
                            loader: 'babel-loader',
                            options:{
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
                            }

                        }
                    },
                    //url loader
                    {
                        test: /\.(jpeg|jpg|png|gif)$/,
                        use: {
                            loader: 'url-loader'
                        }
                    },
                    //css loader
                    {
                        test: /\.css$/,
                        use:[
                            mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                                                                     'css-loader',
                        ]
                    }

               ]
           },
           plugins     
        }
    }