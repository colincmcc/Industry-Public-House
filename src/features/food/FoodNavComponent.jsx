import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { WP_FOODS } from "./FoodMenuComponent";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import theme from "../../common/styled/theme";

// * Prefetches food items on mouse hover for faster loading

class FoodNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeValue: 0
    };
  }
  componentDidMount() {
    const currentPath = this.props.location.pathname;
    let currentTypeValue;
    switch (currentPath) {
      case "/Food/Starters":
        currentTypeValue = 1;
        break;
      case "/Food/Greens":
        currentTypeValue = 2;
        break;
      case "/Food/Handheldsh":
        currentTypeValue = 3;
        break;
      case "/Food/Burghers":
        currentTypeValue = 4;
        break;
      case "/Food/Sustenance":
        currentTypeValue = 5;
        break;
      default:
        currentTypeValue = 0;
        break;
    }

    this.setState({
      typeValue: currentTypeValue
    });
  }

  // ? event may be needed for MaterialUI function
  handleTypeChange = (event, typeValue) => {
    this.setState({ typeValue });
  };

  render() {
    const { classes } = this.props;
    let scrollMenu = true;
    window.innerWidth < 760 ? (scrollMenu = true) : (scrollMenu = false);

    return (
      <MenuNavWrapper>
        <Tabs
          centered
          scrollable={scrollMenu ? true : false}
          scrollButtons="auto"
          onChange={this.handleTypeChange}
          value={this.state.typeValue}
          classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
        >
          {this.props.navItems.map((navItem, index) => (
            <Tab
              label={navItem.label}
              value={index}
              classes={{
                root: classes.tabRoot,
                selected: classes.tabSelected
              }}
              component={Link}
              to={navItem.link}
            />
          ))}
        </Tabs>
      </MenuNavWrapper>
    );
  }
}

export default withStyles(theme.materialUI)(withRouter(FoodNavComponent));

const MenuNavWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 2em 2em;
  padding-top: 56px;
`;

const FoodHeader = styled.div`
  ${props => props.theme.components.heading};
  width: 100%;
  padding-top: 2em;
`;
const MenuNavItem = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSizes.medium.size};
  padding: 1em;
  margin: auto;
  text-transform: uppercase;
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.lightTheme};
  }
`;
