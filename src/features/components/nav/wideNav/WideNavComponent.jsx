import React from 'react';
import shortid from 'shortid';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IconButton from '@material-ui/core/IconButton';
import Phone from '../../../../common/assets/icons/phone.svg';
import theme from '../../../../common/styled/theme';

const WideNavComponent = (props) => {
  const { classes, headerLogo, location } = props;
  const mobileNavItems = [
    { label: 'Home', link: '/' },
    { label: 'Food', link: '/Food' },
    { label: 'Drinks', link: '/Drink' },
    { label: 'Connect', link: '/Contact' },
    { label: 'Apply', link: '/Apply' },
    { label: 'Events', link: '/Calendar' },
    { label: 'Shop', link: '/Shop' },
  ];

  return (
    <TopWrapper>
      <NavContents>
        <LogoImg src={headerLogo} />
        <TopNav>
          <Tabs
            value={location.pathname.substr(0, 4)}
            classes={{
              indicator: classes.indicator,
              root: classes.navTabsRoot,
            }}
          >
            {mobileNavItems.map(navItem => (
              <Tab
                key={shortid.generate()}
                centered="true"
                fullWidth="true"
                component={Link}
                to={navItem.link}
                value={navItem.link.substr(0, 4)}
                label={navItem.label}
                classes={{
                  root: classes.navTabRoot,
                  selected: classes.tabSelected,
                }}
              />
            ))}
          </Tabs>
        </TopNav>
        <TopMobileButtons>
          <IconButton style={{ color: theme.colors.lightAccent }}>
            <Phone />
          </IconButton>
        </TopMobileButtons>
      </NavContents>
    </TopWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(WideNavComponent));

const TopWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  box-sizing: border-box;
  position: absolute;
  height: 65px;
  padding: 16px 32px;

  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 5;
  color: ${props => props.theme.colors.lightAccent};

  ${props => props.theme.media.tablet_landscape_up`
  height: 80px;
  `};
`;
const NavContents = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;
const TopNav = styled.div`
  display: none;
  ${props => props.theme.media.tablet_landscape_up`

  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`};
`;

const TopMobileButtons = styled.div`
  display: inline-flex;
  align-items: center;
  height: 60px;
  ${props => props.theme.media.tablet_landscape_up`
  display: none;
  `};
`;
const LogoImg = styled.img`
  display: flex;
  position: relative;
  max-width: 100px;
  height: 60px;
  z-index: 5;
  ${props => props.theme.media.tablet_landscape_up`
    height: 80px;
    max-width: 100%;
  `};
`;
