# theme-colors

> Easily generate color shades for themes

[![codecov][codecov-src]][codecov-href]
[![npm version][npm-v-src]][npm-v-href]
[![npm downloads][npm-dm-src]][npm-dm-href]
[![package phobia][packagephobia-src]][packagephobia-href]
[![bundle phobia][bundlephobia-src]][bundlephobia-href]

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
[npm-v-src]: https://flat.badgen.net/npm/v/theme-colors/latest
[npm-v-href]: https://npmjs.com/package/theme-colors

[npm-dm-src]: https://flat.badgen.net/npm/dm/theme-colors
[npm-dm-href]: https://npmjs.com/package/theme-colors

[packagephobia-src]: https://flat.badgen.net/packagephobia/install/theme-colors
[packagephobia-href]: https://packagephobia.now.sh/result?p=theme-colors

[bundlephobia-src]: https://flat.badgen.net/bundlephobia/min/theme-colors
[bundlephobia-href]: https://bundlephobia.com/result?p=theme-colors

[codecov-src]: https://flat.badgen.net/codecov/c/github/nuxt-contrib/theme-colors/master
[codecov-href]: https://codecov.io/gh/nuxt-contrib/theme-colors
