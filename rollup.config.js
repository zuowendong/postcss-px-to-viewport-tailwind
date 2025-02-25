import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.esm.js",
      format: "es",
    },
  ],
  plugins: [resolve(), commonjs(), terser()],
  // 外部依赖，不打包进最终文件
  external: ["postcss"],
};
