const { getColors } = require('../src/index')

const fixture = {
  hex: '#ABABAB',
  rgb: ' 171, 171,171 ',
  theme: {
    50: '#FBFBFB',
    100: '#F7F7F7',
    200: '#EAEAEA',
    300: '#DDDDDD',
    400: '#C4C4C4',
    500: '#ABABAB',
    600: '#9A9A9A',
    700: '#676767',
    800: '#4D4D4D',
    900: '#333333'
  }
}

test('getColors (hex)', () => {
  expect(getColors(fixture.hex)).toMatchObject(fixture.theme)
})

test('getColors (rgb)', () => {
  expect(getColors(fixture.rgb)).toMatchObject(fixture.theme)
})

test('getColors (invalid)', () => {
  expect(getColors('FOO')).toMatchObject(getColors('#000000'))
})
