const path = require("path");

/**
 * @type {import('@rspack/core').Configuration}
 */
module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		library: {
			name: "AuroraUI",
			type: "umd",
		},
		globalObject: "this",
		clean: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "typescript",
								tsx: true,
							},
							transform: {
								react: {
									runtime: "automatic",
								},
							},
						},
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				type: "javascript/auto",
			},
		],
	},
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "react",
			root: "React",
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "react-dom",
			root: "ReactDOM",
		},
		"react-router-dom": {
			commonjs: "react-router-dom",
			commonjs2: "react-router-dom",
			amd: "react-router-dom",
			root: "ReactRouterDOM",
		},
		"@emotion/react": {
			commonjs: "@emotion/react",
			commonjs2: "@emotion/react",
			amd: "@emotion/react",
			root: "EmotionReact",
		},
		"@emotion/styled": {
			commonjs: "@emotion/styled",
			commonjs2: "@emotion/styled",
			amd: "@emotion/styled",
			root: "EmotionStyled",
		},
	},
	optimization: {
		minimize: true,
		usedExports: true,
	},
	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
