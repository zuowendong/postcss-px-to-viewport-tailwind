import postcss from "postcss";
import { pxToViewport } from "../index.js"; // 直接引用本地代码
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取测试 CSS 文件
const inputPath = path.join(__dirname, "input.css");
const outputPath = path.join(__dirname, "output.css");
const css = fs.readFileSync(inputPath, "utf8");

// 测试配置
const configs = [
  {
    name: "测试场景1：只允许 sm 和 lg 断点转换",
    options: {
      unitToConvert: "px",
      viewportWidth: 750,
      viewportWidth1: 1024,
      viewportWidth2: 1920,
      width2Tailwind: {
        viewportWidth1: "md",
        viewportWidth2: "lg",
      },
      // allowedBreakpoints: ["md", "lg"],
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
    },
  },
  // {
  //   name: "测试场景2：不设置 allowedBreakpoints",
  //   options: {
  //     unitToConvert: "px",
  //     viewportWidth: 375,
  //     unitPrecision: 5,
  //     viewportUnit: "vw",
  //     width2Tailwind: {
  //       viewportWidth: "sm", // 375px
  //       viewportWidth2: "md", // 768px
  //       viewportWidth3: "lg", // 1024px
  //     },
  //   },
  // },
];

// 运行测试
async function runTests() {
  for (const config of configs) {
    console.log(`\n开始 ${config.name}`);
    console.log("使用配置:", JSON.stringify(config.options, null, 2));

    try {
      const result = await postcss([pxToViewport(config.options)]).process(
        css,
        { from: inputPath, to: outputPath }
      );

      // 将结果写入文件
      const outputFileName = `output-${configs.indexOf(config) + 1}.css`;
      fs.writeFileSync(path.join(__dirname, outputFileName), result.css);

      console.log(`\n转换结果已写入: ${outputFileName}`);
      console.log("转换后的 CSS:");
      console.log(result.css);
    } catch (error) {
      console.error("转换出错：", error);
    }
  }
}

runTests();
