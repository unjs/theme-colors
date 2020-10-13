export function parseColor (color = '') {
  const hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  if (hexMatch) {
    return hexMatch.splice(1).map(c => parseInt(c, 16))
  }

  const hexMatchShort = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(color)
  if (hexMatchShort) {
    return hexMatchShort.splice(1).map(c => parseInt(c + c, 16))
  }

  if (color.includes(',')) {
    return color.split(',').map(p => parseInt(p))
  }

  throw new Error('Invalid color format! Use #ABC or #AABBCC or r,g,b')
}

export function hexValue (components) {
  return '#' + components.map(c => `0${c.toString(16).toUpperCase()}`.slice(-2)).join('')
}

export function tint (components, intensity) {
  return components.map(c => Math.round(c + (255 - c) * intensity))
}

export function shade (components, intensity) {
  return components.map(c => Math.round(c * intensity))
}

export const withTint = intensity => hex => tint(hex, intensity)

export const withShade = intensity => hex => shade(hex, intensity)
