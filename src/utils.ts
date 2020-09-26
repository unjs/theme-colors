export function parseColor (color = '') {
  if (color[0] === '#') {
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
      .exec(color)
      .splice(1)
      .map(c => parseInt(c, 16))
  }

  if (color.includes(',')) {
    return color.split(',').map(p => parseInt(p))
  }

  return [0, 0, 0]
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
