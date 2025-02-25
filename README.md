<div align="right">
  <a href="./README.md">English</a> | <a href="./README.zh-CN.md">中文</a>
</div>

# postcss-px-to-viewport-tailwind

A PostCSS plugin for converting px units to viewport units (vw, vh) with multi-breakpoint support. Based on postcss-px-to-viewport.

## Installation

```bash
npm install postcss-px-to-viewport-tailwind --save-dev
```

## Basic Usage

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport-tailwind': {
      unitToConvert: 'px',
      viewportWidth: 375,          // Mobile viewport
      viewportWidthTablet: 768,    // Tablet viewport
      viewportWidthDesktop: 1440,  // Desktop viewport
      customBreakpoints: 1920,     // Custom breakpoint width
      // Breakpoint width mapping configuration
      width2Tailwind: {
        viewportWidthTablet: 'md',    // Tablet => md breakpoint
        viewportWidthDesktop: 'lg',   // Desktop => lg breakpoint
        customBreakpoints: '2xl',     // Custom breakpoint => 2xl breakpoint
      },
      // Only convert specified breakpoints
      allowedBreakpoints: ['md', 'lg'],
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
    },
  },
}
```

## Key Features

✨ Multi-breakpoint responsive design support  
✨ Seamless integration with Tailwind CSS breakpoints  
✨ Automatic calculation based on design draft width  
✨ Support for selective conversion of specific breakpoints  

## Example

Input:

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

Output:

```css
.element {
  width: 26.67vw;     /* Based on mobile viewport */
  font-size: 4.27vw;
}

.lg\:element {
  width: 13.89vw;     /* Based on desktop viewport */
}

.md\:element {
  width: 19.53vw;     /* Based on tablet viewport */
}
```

## Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| unitToConvert | String | 'px' | Unit to convert |
| viewportWidth | Number | 375 | Mobile viewport width |
| viewportWidthTablet | Number | 768 | Tablet viewport width |
| viewportWidthDesktop | Number | 1440 | Desktop viewport width |
| breakpoints | Object | - | Breakpoint configuration mapping |
| unitPrecision | Number | 5 | Decimal places |
| propList | Array | ['*'] | Properties to convert |
| viewportUnit | String | 'vw' | Viewport unit |
| width2Tailwind | Object | null | Breakpoint width mapping configuration |
| allowedBreakpoints | Array | null | List of allowed breakpoints |

## License

MIT

## Credits

Based on [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)
