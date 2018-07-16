import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { mobileNavItems } from "../NavContainer";
import theme from "../../../common/styled/theme";

const MobileMenuComponent = props => {
  const { location } = props;
  var isOpen = location === "/#Menu";
  const onOpen = () => {};
  const onClose = () => {};
  return (
    <SwipeableDrawer
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      anchor="right"
    >
      <List>
        {mobileNavItems.map(navItem => {
          <Button component={Link} to={navItem.link}>
            {navItem.label}
          </Button>;
        })}
      </List>
    </SwipeableDrawer>
  );
};

export default withStyles(theme.materialUI)(withRouter(MobileMenuComponent));
const MobileMenuWrapper = styled.div`
  background-color: ${props => props.theme.colors.whiteTheme};
  z-index: 999;
  position
`;
