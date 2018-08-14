import React from 'react';
import shortid from 'shortid';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import theme from '../../common/styled/theme';

// * Prefetches food items on mouse hover for faster loading

const FoodNavComponent = (props) => {
  const { classes } = props;
  const currentPath = props.location.pathname;
  let scrollMenu = true;
  window.innerWidth < 760 ? (scrollMenu = true) : (scrollMenu = false);
  return (
    <MenuNavWrapper>
      <Tabs
        centered={!scrollMenu}
        scrollable={!!scrollMenu}
        scrollButtons="auto"
        value={currentPath}
        classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
      >
        {props.navItems.map((navItem, index) => (
          <Tab
            key={shortid.generate()}
            label={navItem.label}
            value={navItem.link}
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
            }}
            component={Link}
            to={navItem.link}
          />
        ))}
      </Tabs>
    </MenuNavWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(FoodNavComponent));

const MenuNavWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 2em 2em;
  padding-top: 56px;
`;
