var path = require("path")
var clean = require("clean-webpack-plugin")
var webpack = require('webpack');

module.exports = {
	entry:{
	  bundle:__dirname+"/app/main.js",
	  vendor:['react','react-dom']
	},
	output:{
		 path: path.resolve(__dirname, './dist'),
         publicPath: '/dist/',
         filename:"[name].js"
	},
	module:{
		rules:[
            {
			test:/\.jsx?$/,
			exclude:/node_modules/,
            	loaders:['babel-loader?presets[]=es2015&presets[]=react']
            } 
		]
	},
	plugins:[
	   new clean(['dist']),
	   new webpack.optimize.CommonsChunkPlugin("common"),
	   new webpack.optimize.UglifyJsPlugin({
		   sourceMap:true//快速找到错误的源文件
	   })
	],
	resolve:{
      extensions:['.js','.jsx']
	},
	devtool:'inline-source-map'//友好错误提示
}