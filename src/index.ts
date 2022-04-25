import { withTint, withShade, parseColor, hexValue } from './utils'

export const _variants = {
  50: withTint(0.95),
  100: withTint(0.9),
  200: withTint(0.75),
  300: withTint(0.6),
  400: withTint(0.3),
  500: (c: number[]) => c,
  600: withShade(0.9),
  700: withShade(0.6),
  800: withShade(0.45),
  900: withShade(0.3)
}

export function getColors (color: string, variants = _variants) {
  const colors: Record<string, string> = {}
  const components = parseColor(color)

  for (const [name, fn] of Object.entries(variants)) {
    colors[name] = hexValue(fn(components))
  }

  return colors
}
