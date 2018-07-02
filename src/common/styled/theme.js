import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}
export const colors = {
  theme: "yellow",
  action: "yellow",
  darkAccent: "#252525",
  lightAccent: " light grey"
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const theme = {
  theme: "yellow",
  action: "yellow",
  darkAccent: "#252525",
  lightAccent: " light grey"
}

export default theme