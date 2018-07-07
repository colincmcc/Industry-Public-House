import React, { Component } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { DP_TAPS } from "./DrinkContainer";
import { renderComponent } from "recompose";

// * Prefetches drink items on mouse hover for faster loading. Desktop only

const TOGGLE_LOCATION = gql`
  mutation selectLocation($currentLocation: Int!) {
    selectLocation(currentLocation: $currentLocation) @client
  }
`;
const styles = {
  root: {
    color: "#F4EDDC"
  },
  tabsRoot: {
    color: "#F4EDDC"
  },
  tabRoot: {
    color: "#F4EDDC"
  },
  indicator: {
    backgroundColor: "#F69C20"
  }
};

class DrinkNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    let showNav = false;
    const locationNav = ["/Drink/Taps", "/Drink/Premium", "/Drink/Cans"];
    if (locationNav.includes(this.props.location.pathname)) {
      showNav = true;
    }
    console.log(this.state.value);
    return (
      <DrinkNavWrapper>
        <DrinkHeader> Drinks </DrinkHeader>
        {/** Drink Type Nav **/}
        <DrinkTypesNav>
          <Tabs
            fullWidth
            onChange={this.handleChange}
            value={this.state.value}
            classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
          >
            >
            {this.props.navItems.map((navItem, index) => (
              <Tab
                key={navItem.slug}
                value={index}
                label={navItem.label}
                component={Link}
                to={"/Drink/" + navItem.slug}
                classes={{ root: classes.tabRoot }}
              />
            ))}
          </Tabs>
        </DrinkTypesNav>

        {/** Restaurant Location Nav
         * Shown based on above logic for showNav boolean
         **/}
        <LocationsNav className={showNav ? "showNav" : null}>
          {this.props.locations.map(location => (
            <Mutation key={shortid.generate()} mutation={TOGGLE_LOCATION}>
              {selectLocation => (
                <DrinkNavItem
                  onClick={() =>
                    selectLocation({
                      variables: { currentLocation: location.id }
                    })
                  }
                  onMouseOver={() =>
                    this.props.client.query({
                      query: DP_TAPS,
                      variables: { location: location.id }
                    })
                  }
                  className={
                    location.id === this.props.currentLocation ? "active" : ""
                  }
                >
                  {location.label}
                </DrinkNavItem>
              )}
            </Mutation>
          ))}
        </LocationsNav>
      </DrinkNavWrapper>
    );
  }
}

export default withStyles(styles)(withRouter(DrinkNavComponent));

const DrinkNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
`;
const DrinkHeader = styled.div`
  ${props => props.theme.components.heading};
`;
const DrinkNavItem = styled.div`
  display: flex;
  margin: auto;
  padding: 1em;
  font-size: ${props => props.theme.fontSizes.medium.size};
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.colors.lightTheme};
  }
`;
const DrinkTypesNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  ${props => props.theme.fontStyles.subheading};
`;
const LocationsNav = styled.div`
  display: none;
  &.showNav {
    display: flex;
    flex-wrap: wrap;
    ${props => props.theme.fontStyles.subheading};
    font-style: italic;
    margin: auto;
  }
`;
