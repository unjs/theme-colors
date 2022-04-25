import { describe, it, expect } from 'vitest'
import { getColors } from '../src/index'
import { parseColor } from '../src/utils'

describe('theme-colors', () => {
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

  it('getColors (hex)', () => {
    expect(getColors(fixture.hex)).toMatchObject(fixture.theme)
  })

  it('getColors (rgb)', () => {
    expect(getColors(fixture.rgb)).toMatchObject(fixture.theme)
  })

  it('getColors (invalid)', () => {
    expect(() => getColors('red')).toThrowError(/Invalid color format!/)
  })

  it('getColors (invalid obj)', () => {
    // @ts-expect-error: test invalid argument
    expect(() => getColors({})).toThrowError(/Color should be string!/)
  })

  it('parseColor (shorthand)', () => {
    expect(parseColor('#09C')).toEqual(parseColor('#0099cc'))
  })
})
