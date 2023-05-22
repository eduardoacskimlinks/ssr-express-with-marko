import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import marko from "@marko/rollup";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
// const production = !process.env.ROLLUP_WATCH;

export default {
	input: "src/index.js",
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},  
  plugins: [
    marko.server(),
    nodeResolve({ preferBuiltins: true }),
    commonjs({
      extensions: [".js", ".marko"]
    }),
  ]
};
