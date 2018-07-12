import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import { WP_FOODS } from "./FoodContainer";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import theme from "../../common/styled/theme";

// * Prefetches food items on mouse hover for faster loading

const TOGGLE_FOODTYPE = gql`
  mutation selectFoodType($selectedFoodType: String!) {
    selectFoodType(selectedFoodType: $selectedFoodType) @client
  }
`;

class FoodNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodValue: 0
    };
  }
  componentDidMount() {
    const selectedFoodType = this.props.selectedFoodType;
    let currentFoodValue;
    switch (selectedFoodType) {
      case "starters":
        currentFoodValue = 1;
        break;
      case "greens":
        currentFoodValue = 2;
        break;
      case "handhelds":
        currentFoodValue = 3;
        break;
      case "burghers":
        currentFoodValue = 4;
        break;
      case "sustenance":
        currentFoodValue = 5;
        break;
      case "brunch":
        currentFoodValue = 0;
        break;
      default:
        break;
    }
    console.log(selectedFoodType);
    console.log(currentFoodValue);
    this.setState({
      foodValue: currentFoodValue
    });
  }
  // event is needed for MaterialUI function
  handleTypeChange = foodValue => {
    this.setState({ foodValue });
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
          value={this.state.foodValue}
          classes={{ indicator: classes.indicator, root: classes.tabsRoot }}
        >
          {this.props.navItems.map((navItem, index) => (
            <Mutation key={shortid.generate()} mutation={TOGGLE_FOODTYPE}>
              {selectFoodType => (
                <Tab
                  label={navItem.label}
                  value={index}
                  onClick={() => {
                    selectFoodType({
                      variables: { selectedFoodType: navItem.slug }
                    });
                    this.handleTypeChange(index);
                    console.log("inner index = " + index);
                  }}
                  classes={{ root: classes.tabRoot }}
                  onMouseOver={() =>
                    this.props.client.query({
                      query: WP_FOODS,
                      variables: { selectedFoodType: navItem.slug }
                    })
                  }
                />
              )}
            </Mutation>
          ))}
        </Tabs>
      </MenuNavWrapper>
    );
  }
}

export default withStyles(theme.materialUI)(FoodNavComponent);

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
