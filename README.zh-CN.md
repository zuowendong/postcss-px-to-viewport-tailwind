<div align="right">
  <a href="./README.md">English</a> | <a href="./README.zh-CN.md">中文</a>
</div>

# postcss-px-to-viewport-tailwind

一个支持多断点响应式的 PostCSS 插件，用于将 px 单位转换为视口单位（vw, vh）。基于 postcss-px-to-viewport 开发。

## 安装

```bash
npm install postcss-px-to-viewport-tailwind --save-dev
```

## 基本用法

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport-tailwind': {
      unitToConvert: 'px',
      viewportWidth: 375,          // 移动端视口宽度
      viewportWidthTablet: 768,    // 平板视口宽度
      viewportWidthDesktop: 1440,  // 桌面端视口宽度
      customBreakpoints: 1920,     // 自定义断点宽度
      // 断点宽度映射配置
      width2Tailwind: {
        viewportWidthTablet: 'md',    // 平板 => md 断点
        viewportWidthDesktop: 'lg',   // 桌面 => lg 断点
        customBreakpoints: '2xl',     // 自定义断点 => 2xl 断点
      },
      // 仅转换指定断点
      allowedBreakpoints: ['md', 'lg'],
      unitPrecision: 5,            // 小数点位数
      propList: ['*'],             // 需要转换的属性
      viewportUnit: 'vw',          // 转换后的视口单位
      fontViewportUnit: 'vw',      // 字体使用的视口单位
      selectorBlackList: [],       // 不转换的选择器
      minPixelValue: 1,            // 最小像素值
      mediaQuery: false,           // 是否转换媒体查询中的 px
      replace: true,               // 是否直接替换
      exclude: [/node_modules/],   // 忽略的文件
    },
  },
}
```

## 主要特性

✨ 多断点响应式设计支持  
✨ 与 Tailwind CSS 断点无缝集成  
✨ 基于设计稿宽度自动计算  
✨ 支持选择性转换特定断点  

## 使用示例

输入：

```css
.element {
  width: 100px;
  font-size: 16px;
}

.lg\:element {
  width: 200px;
}

.md\:element {
  width: 150px;
}
```

输出：

```css
.element {
  width: 26.67vw;     /* 基于移动端视口 */
  font-size: 4.27vw;
}

.lg\:element {
  width: 13.89vw;     /* 基于桌面端视口 */
}

.md\:element {
  width: 19.53vw;     /* 基于平板视口 */
}
```

## 配置选项

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| unitToConvert | String | 'px' | 需要转换的单位 |
| viewportWidth | Number | 375 | 移动端视口宽度 |
| viewportWidthTablet | Number | 768 | 平板视口宽度 |
| viewportWidthDesktop | Number | 1440 | 桌面端视口宽度 |
| breakpoints | Object | - | 断点配置映射 |
| unitPrecision | Number | 5 | 小数点位数 |
| propList | Array | ['*'] | 需要转换的属性 |
| viewportUnit | String | 'vw' | 视口单位 |
| width2Tailwind | Object | null | 断点宽度映射配置 |
| allowedBreakpoints | Array | null | 允许转换的断点列表 |

## 开源协议

MIT

## 致谢

基于 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 开发
