import { css } from 'styled-components'

const sizes = {
  large_up: 1800,
  desktop_up: 1200,
  tablet_landscape_up: 900,
  tablet_portrait_up: 600,
  phone_only: 599
}
const colors = {
  theme: "#F6C120",
  darkTheme: "#463A17",
  lightTheme: "#F6E420",
  lightAccent: "#F69C20",
  darkAccent: "#463217",
  blackTheme: "#110C02",
  whiteTheme: "#F4EDDC",
  darkGray: "#252525",
}

const fontSizes = {
  heading: {
    size: "40px",
    lineHeight: "50px",
    weight: 400

  },
  subHeading: {
    size: "22px",
    lineHeight: "33px",
    fontWeight: 600,
    letterSpacing: ".025em",

  },
  medium: {
    size: "19px",
    lineHeight: "28px",
    weight: "500px"
  },
  text: {
    size: "17px",
    lineHeight: "28px",
    weight: 400,

  }
}

 const media = Object.keys(sizes).reduce((acc, label) => {
   if(acc[label] != "phone_only"){
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `}
  else{
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  }
  return acc
}, {})

const theme = {
  media: media,
  colors: colors,
  fontSizes: fontSizes
}

export default theme