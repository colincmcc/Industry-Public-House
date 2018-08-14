import { css } from 'styled-components';

const sizes = {
  large_up: 1800,
  desktop_up: 1200,
  tablet_landscape_up: 900,
  tablet_portrait_up: 600,
  phone_only: 599,
};
const colors = {
  theme: '#F6C120',
  darkTheme: '#5b470c',
  lightTheme: '#F6E420',
  lightAccent: '#F69C20',
  darkAccent: '#463217',
  blackTheme: '#110C02',
  whiteTheme: '#F4EDDC',
  darkGray: '#1d1e22',
  yellowGray: '#d7d5cd',
  darkBlue: '#051b3e',
  warning: '#F66020',
};

const fontSizes = {
  heading: {
    size: '40px',
    lineHeight: '50px',
    weight: 400,

  },
  subHeading: {
    size: '22px',
    lineHeight: '33px',
    fontWeight: 600,
    letterSpacing: '.025em',

  },
  medium: {
    size: '19px',
    lineHeight: '28px',
    weight: 500,
  },
  text: {
    size: '17px',
    lineHeight: '28px',
    weight: 400,

  },
};
const fontStyles = {
  heading: css`
  font-size: 40px;
  line-height: 50px;
  font-weight: 800;
  font-family: 'Gin Rough';
  `,
  subHeading: css`
  font-size: 22px;
  line-height: 33px;
  font-weight: 00;
  letter-spacing: .025em;
  font-family: 'Gin Rough';

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
  font-family: "Source Sans Pro";

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
};

const media = Object.keys(sizes).reduce((acc, label) => {
  if (acc[label] !== 'phone_only') {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  } else {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  }
  return acc;
}, {});

const styledComponents = {
  heading: css`
  ${fontStyles.heading}
  margin: auto;
  color: ${colors.whiteTheme};
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
  text: css`
  ${fontStyles.text}
margin: auto;
color: ${colors.whiteTheme};
`,
  small: css`
  ${fontStyles.small}
margin: auto;
color: ${colors.whiteTheme};
`,

};

const material = {
  root: {
    color: '#F4EDDC',
    ...fontStyles.text,
  },
  tabRoot: {
    color: '#F4EDDC',
    ...fontStyles.text,
  },
  navTabRoot: {
    color: '#F4EDDC',
    ...fontStyles.text,
    minWidth: '100px',

    '@media(min-width: 1800px)': {
      minWidth: '160px',
    },
  },
  tabSelected: {
    color: colors.lightAccent,
  },
  navTabsRoot: {
    flexGrow: 1,

  },
  tabsRoot: {
    flexGrow: 1,
    margin: 'auto',
  },
  indicator: {
    backgroundColor: colors.lightAccent,
  },
  listRoot: {
    width: '100%',
    minWidth: '50%',
    color: colors.blackTheme,
    ...fontStyles.text,

    '@media(min-width: 700px)': {
      columns: 2,
    },
  },
  listSecondaryRoot: {
    color: colors.blackTheme,
    top: '12px',
    transform: 'translateY(0)',
  },
  listItemPrimary: {
    fontSize: fontSizes.medium.size,
    breakInside: 'avoid',
  },
  listItemRoot: {
    breakInside: 'avoid',
    ...fontStyles.text,

  },
  listItemContainer: {
    maxWidth: 360,
  },
  bottomNavRoot: {
    width: '100%',
    backgroundColor: colors.blackTheme,
  },
  bottomActionRoot: {
    color: colors.whiteTheme,

    minWidth: '35px',

  },
  bottomActionSelected: {
    color: `${colors.lightAccent}!important`,

  },
  buttonRoot: {
    color: `${colors.lightAccent}!important`,
    ...fontStyles.text,

  },
  buttonDisabled: {
    backgroundColor: `${colors.yellowGray}!important`,
  },
  homeButton: {
    ...fontStyles.medium,
    color: `${colors.blackTheme}!important`,
    backgroundColor: colors.lightAccent,
    '&:hover': {
      backgroundColor: colors.yellowGray,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: colors.yellowGray,
      },
    },
  },
  buttonColorPrimary: {
    color: colors.lightAccent,
  },
  paperRoot: {
    color: colors.blackTheme,
    minHeight: '100px',
    maxWidth: '1060px',
    backgroundColor: '#F4EDDC',
    margin: 'auto',
    boxShadow: '0 50px 100px #5b470c1A, 0 15px 35px #5b470c26, 0 5px 15px rgba(0,0,0,0.1)',

  },
  swipeableBottomMenuRoot: {
    color: colors.blackTheme,
    backgroundColor: colors.whiteTheme,
    ...fontStyles.text,

    '@media(orientation: landscape)': {
      height: '100vh',
    },
  },
  swipeableSideMenuRoot: {
    color: colors.blackTheme,
    height: '100vh',
    backgroundColor: colors.whiteTheme,
    width: '320px',
  },
  swipeableMenuList: {
    height: '100%',
    backgroundColor: colors.whiteTheme,
  },
  avatarLarge: {
    width: 60,
    height: 60,
    margin: 10,
  },
  eventCard: {
    width: 345,
    color: colors.blackTheme,
    marginLeft: 16,
    display: 'inline-block',
    backgroundColor: colors.whiteTheme,
    minHeight: 490,
    position: 'relative',


  },
  eventMedia: {
    height: 0,
    paddingTop: '56.25%',
  },
  eventList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
};

const theme = {
  media,
  colors,
  fontSizes,
  fontStyles,
  components: styledComponents,
  materialUI: material,
};

export default theme;
