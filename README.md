# theme-colors

> Easily generate color shades for themes

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]

Install:

```bash
yarn add theme-colors

# or

npm i theme-colors
```

Usage:

```js
import { getColors } from 'theme-colors'

const theme = getColors('#ABABAB')

// Using rgb
const theme = getColors('172,172,172')
```

```js
{
  50: '#FBFBFB',
  100: '#F7F7F7',
  200: '#EAEAEA',
  300: '#DDDDDD',
  400: '#C4C4C4',
  500: '#ABABAB',
  600: '#9A9A9A',
  700: '#676767',
  800: '#4D4D4D',
  900: '#333333',
}
```

## License

Inspired by [javisperez/tailwindcolorshades](https://github.com/javisperez/tailwindcolorshades)

MIT. Made with 💖

<!-- Refs -->
[npm-version-src]: https://img.shields.io/npm/v/theme-colors?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/theme-colors
[npm-downloads-src]: https://img.shields.io/npm/dm/theme-colors?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/theme-colors
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/theme-colors/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/theme-colors
[bundle-src]: https://img.shields.io/bundlephobia/minzip/theme-colors?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=theme-colors
