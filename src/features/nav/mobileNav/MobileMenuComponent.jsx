import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import { Phone, Facebook, Twitter, Instagram } from "mdi-material-ui";
import { CSSTransition } from "react-transition-group";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { mobileNavItems } from "../NavContainer";
import theme from "../../../common/styled/theme";

const MobileMenuComponent = props => {
  const { location, classes, history } = props;
  const onOpen = () => {};

  const back = e => {
    console.log("goBack");
    history.goBack();
  };

  return (
    <MobileMenuWrapper>
      <SwipeableDrawer
        open={true}
        onOpen={onOpen}
        onClose={back}
        anchor="right"
        classes={{ paper: classes.swipeableMenuRoot }}
        variant="temporary"
      >
        <MobileMenuInner>
          <MobileMenuHeader />

          <List classes={{ root: classes.swipeableMenuList }}>
            {mobileNavItems.map(navItem => (
              <ListItem>
                <ListItemText> {navItem.label} </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={back}
                    style={{ color: theme.colors.lightAccent }}
                  >
                    <Phone />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <MobileMenuFooter />
        </MobileMenuInner>
      </SwipeableDrawer>
    </MobileMenuWrapper>
  );
};

export default withStyles(theme.materialUI)(withRouter(MobileMenuComponent));
const MobileMenuWrapper = styled.div``;
const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const MobileMenuHeader = styled.div`
  height: 250px;
  display: flex;
  background-color: ${props => props.theme.colors.yellowGray};
`;
const MobileMenuFooter = styled.div`
  min-height: 56px;
  background-color: ${props => props.theme.colors.yellowGray};
`;
