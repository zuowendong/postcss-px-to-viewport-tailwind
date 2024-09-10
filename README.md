# postcss-px-to-viewport-tailwind

Use postcss-px-to-viewport and tailwindcss can dynamically change the viewport width.

## how to use

```js
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"],
    },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      viewportWidthPaid: 750,
      viewportWidthPc: 1920,
      width2Tailwind: {
        viewportWidthPaid: "md",
        viewportWidthPc: "xl",
      },
      unitPrecision: 6,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [/node_modules/],
      landscape: false,
    },
  },
},
```
