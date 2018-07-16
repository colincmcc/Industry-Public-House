import styled, { css } from 'styled-components'


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
    weight: 500
  },
  text: {
    size: "17px",
    lineHeight: "28px",
    weight: 400,

  }
}
const fontStyles = {
  heading: css`
  font-size: 40px;
  line-height: 50px;
  font-weight: 400;
  `,
  subHeading: css`
  font-size: 22px;
  line-height: 33px;
  font-weight: 600;
  letter-spacing: .025em;
  `,
  medium: css`
  font-size: 19px;
  line-height: 28px;
  font-weight: 500;
  `,
  text: css`
  font-size: 17px;
  line-height: 28px;
  font-weight: 400;
  `,
  smallHeading: css`
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  letter-spacing: .025em;

  `,
  small: css`
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
  `,
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

const styledComponents = {
  heading: css`
  ${fontStyles.heading}
  margin: auto;
  color: ${colors.theme};
  `,
  subHeading: css`
    ${fontStyles.subHeading}
  margin: auto;
  color: ${colors.theme};

  `,
  smallHeading: css`
    ${fontStyles.smallHeading}
  margin: auto;
  color: ${colors.theme};
  text-transform: uppercase;
  `,
  small: css`
  ${fontStyles.small}
margin: auto;
color: ${colors.whiteTheme};
`

}

const material = {
  root: {
    color: "#F4EDDC"
  },
  tabRoot: {
    color: "#F4EDDC"
  },
  tabSelected: {
    color: colors.lightAccent
  },
  tabsRoot: {
    flexGrow: 1,

  },
  indicator: {
    backgroundColor: colors.lightAccent,
  },
  listRoot: {
    width: "100%",
    minWidth: "50%",
    width: "100%",
    color: colors.blackTheme,
    '@media(min-width: 700px)': {
      columns: 2,
    }
  },
  listSecondaryRoot: {
    color: colors.blackTheme,
    top: '12px',
    transform: 'translateY(0)'
  },
  listItemPrimary:{
    fontSize: fontSizes.medium.size,
    breakInside: "avoid"
  },
  listItemRoot:{
    breakInside: "avoid",
  },
  listItemContainer: {
    maxWidth: 360
  },
  bottomNavRoot:{
    width: "100%",
    backgroundColor: colors.blackTheme
  },
  bottomActionRoot:{
    color: colors.whiteTheme,

    minWidth: "35px"

  },
  bottomActionSelected:{
    color: colors.lightAccent + "!important"

  },
  buttonRoot: {
    color: colors.lightAccent + "!important",
  },
  buttonColorPrimary: {
    color: colors.lightAccent,
  },
  paperRoot: {
    color: colors.blackTheme,
    width: "100%",
    minHeight: "100px"
  }
}

const theme = {
  media: media,
  colors: colors,
  fontSizes: fontSizes,
  fontStyles: fontStyles,
  components: styledComponents,
  materialUI: material
}

export default theme