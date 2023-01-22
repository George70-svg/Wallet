type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type HSL = `hsl(${string})`
type HSLA = `hsla(${string})`

type Color = RGB | RGBA | HEX | HSL | HSLA

type Colors = {
  white: Color
  whiteOpacity: Color,
  blue: Color,
  lightBlue: Color,
  yellow: Color,
  darkYellow: Color,
  red: Color,
  green: Color,
  grey100: Color,
  grey200: Color,
  grey300: Color,
  grey400: Color,
  grey500: Color,
  grey600: Color,
  grey700: Color,
  grey800: Color,
  grey900: Color,
  black: Color,
}

type Gradients = {
  backgroundDark: string
}

type Fonts = {
  fs1: string,
  fs2: string,
  fs3: string,
  fs4: string,
  fs5: string,
  fs6: string,
  fs7: string,
  fs8: string,
}

type Shadows = {
  primaryShadow: string,
  smallShadow: string,
  secondaryShadow: string,
  halfHorShadow: string,
}

type Radii = {
  radius1: string,
  radius2: string,
  radius3: string,
  radius4: string,
  radius5: string,
  radius6: string,
  radius7: string,
  radius8: string,
}

export type CommonStyle = {
  colors: Colors
  gradients: Gradients
  fonts: Fonts
  shadows: Shadows
  radii: Radii
}