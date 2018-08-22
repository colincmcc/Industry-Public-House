import React, { Component } from 'react';

import gql from 'graphql-tag';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Phone from '../../../../common/assets/icons/phone.svg';

// MISC
import { mobileNavItems } from '../NavContainer';
import theme from '../../../../common/styled/theme';
import headerBG from '../../../../common/assets/img/dark-triangles.png';

const TOGGLE_MENU = gql`
  mutation toggleMenu($mobileMenuOpen: Boolean!) {
    updateMobileMenuStatus(mobileMenuOpen: $mobileMenuOpen) @client
  }
`;
// ! Using link-state to update menu status to transition both the bottom nav and side drawer
class MobileMenuComponent extends Component {
  state = {
    isOpen: true,
  };


  componentDidMount() {
    this.onOpen();
  }

  onOpen = () => {
    const { client } = this.props;
    this.setState({
      isOpen: true,
    });

    client.mutate({
      mutation: TOGGLE_MENU,
      variables: { mobileMenuOpen: true },
    });
  };

  onClose = () => {
    const { client } = this.props;

    this.setState({
      isOpen: false,
    });
    client.mutate({
      mutation: TOGGLE_MENU,
      variables: { mobileMenuOpen: false },
    });
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  // * By using react router, we have to mount the component then manually
  // * set the Material-UI Slide prop to trigger the animation.
  // * Material-UI uses CSS Transition Group under the hood. onExited is a Transition prop.
  // * This ensures the animation is complete before unmounting
  // ? Possibley move to CSS Transition Group directly for in & out animation

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;
    const isWide = window.innerWidth > 600;

    return (
      <MobileMenuWrapper>
        <SwipeableDrawer
          open={isOpen}
          onOpen={this.onOpen}
          onClose={this.onClose}
          anchor={isWide ? 'left' : 'bottom'}
          SlideProps={{
            onExited: this.goBack,
          }}
          classes={{
            paper: isWide
              ? classes.swipeableSideMenuRoot
              : classes.swipeableBottomMenuRoot,
          }}
        >
          <MobileMenuInner>
            <MobileMenuHeader calcWidth={window.innerWidth * 0.5625} />

            <List classes={{ root: classes.swipeableMenuList }}>
              {mobileNavItems.map(navItem => (
                <ListItem button component={Link} to={navItem.link}>
                  <ListItemIcon>
                    <Phone style={{ fill: theme.colors.lightAccent }} />
                  </ListItemIcon>
                  <ListItemText>
                    {navItem.label}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <ModalExit>
              <IconButton onClick={this.onClose}> X</IconButton>
            </ModalExit>
          </MobileMenuInner>
        </SwipeableDrawer>
      </MobileMenuWrapper>
    );
  }
}

export default withStyles(theme.materialUI)(withRouter(MobileMenuComponent));

const MobileMenuWrapper = styled.div``;
const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.whiteTheme};
`;
const MobileMenuHeader = styled.header`
  padding: 16px;
  display: flex;
  height: ${props => `${props.calcWidth}px`};
  background-color: ${props => props.theme.colors.whiteTheme};
  align-items: flex-end;
  color: ${props => props.theme.colors.whiteTheme};

  top: 0;
  left: 0;
  @media (orientation: landscape) {
    display: none;
  }
  &:before {
    content: "";
    width: 100%;
    height: ${props => `${props.calcWidth}px`};
    position: absolute;
    background: url(${headerBG}) repeat;
    opacity: 0.8;
    top: 0;
    left: 0;
    padding: 16px;
  }
`;
const MobileUserInfo = styled.div``;
const MobileHeader = styled.div`
  display: flex;
  ${props => props.theme.components.subheading};
  position: absolute;

  width: 100%;
  text-align: left;
  padding: 0 16px;
`;
const MobileSubHeader = styled.div`
  ${props => props.theme.fontStyles.subheading};
  width: 100%;
  text-align: left;
  padding: 0 16px;
`;
const MobileMenuFooter = styled.div`
  min-height: 56px;
  background-color: ${props => props.theme.colors.yellowGray};
`;
const ModalExit = styled.div`
  position: absolute;
  padding: 16px 16px 10px 16px;
  bottom: 0;
  right: 0;
`;
