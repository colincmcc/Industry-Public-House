import React, { Component } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import theme from "../../common/styled/theme";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { DP_TAPS } from "./DrinkContainer";

// * Prefetches drink items on mouse hover for faster loading. Desktop only

// Note: you cannot pass a Styled Component theme prop as the MaterialUI's classes object (e.g. classes:{{root: props.theme.materialUI.root}}), when using the withTheme higher component

// TODO: work out how the withStyles higher component uses the object passed to it and write a function to use the Styled Component theme instead

const TOGGLE_LOCATION = gql`
  mutation selectLocation($currentLocation: Int!) {
    selectLocation(currentLocation: $currentLocation) @client
  }
`;

class DrinkNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeValue: 0
    };
    this.fetchTreeData = this.fetchTreeData.bind(this);
  }

  // Couldn't get Material-UI to use something outside of the index to update active tab
  // had to manually assign active tab here in case there is a direct link to one of the routes
  componentDidMount() {
    const currentPath = this.props.location.pathname;
    let currentTypeValue;
    switch (currentPath) {
      case "/Drink/Taps":
        currentTypeValue = 1;
        break;
      case "/Drink/Cans":
        currentTypeValue = 2;
        break;
      case "/Drink/Wine":
        currentTypeValue = 3;
        break;
      case "/Drink/Premium":
        currentTypeValue = 4;
        break;
      default:
        break;
    }
    this.setState({
      typeValue: currentTypeValue
    });
    this.fetchTreeData();
  }
  fetchTreeData() {
    this.props.client.query({
      query: DP_TAPS,
      variables: { location: 2 }
    });
  }

  // ? event may be needed for MaterialUI function
  handleTypeChange = (event, typeValue) => {
    this.setState({ typeValue });
  };

  render() {
    const { classes } = this.props;
    let showNav = false;

    const locationNav = ["/Drink/Taps", "/Drink/Premium", "/Drink/Cans"];

    if (locationNav.includes(this.props.location.pathname)) {
      showNav = true;
    }

    return (
      <DrinkNavWrapper>
        {/** Drink Type Nav **/}
        <DrinkTypesNav>
          <Tabs
            scrollable
            scrollButtons="auto"
            onChange={this.handleTypeChange}
            value={this.state.typeValue}
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

        {/** Restaurant Location Nav - Shown based on above logic for showNav boolean
         * * value is -1 because Digital Pour starts indexing at 1 instead of 0
         * * and MaterialUI wasn't handling it well
         **/}
        <LocationsNav className={showNav ? "showNav" : null}>
          <Tabs
            fullWidth
            value={this.props.currentLocation - 1}
            classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
          >
            {this.props.locations.map(location => (
              <Mutation key={shortid.generate()} mutation={TOGGLE_LOCATION}>
                {selectLocation => (
                  <Tab
                    value={location.id - 1}
                    label={location.label}
                    onClick={() =>
                      selectLocation({
                        variables: { currentLocation: location.id }
                      })
                    }
                    classes={{ root: classes.tabRoot }}
                    onMouseOver={() =>
                      this.props.client.query({
                        query: DP_TAPS,
                        variables: { location: location.id }
                      })
                    }
                  />
                )}
              </Mutation>
            ))}
          </Tabs>
        </LocationsNav>
      </DrinkNavWrapper>
    );
  }
}

export default withStyles(theme.materialUI)(withRouter(DrinkNavComponent));

const DrinkNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-top: 56px;
`;
const DrinkTypesNav = styled.div`
  display: flex;
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
