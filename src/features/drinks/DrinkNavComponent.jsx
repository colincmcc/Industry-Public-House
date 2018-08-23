import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { DP_TAPS } from './graphql';
import theme from '../../common/styled/theme';

// * Prefetches drink items on mouse hover for faster loading. Desktop only

// Note: you cannot pass a Styled Component theme prop as the MaterialUI's classes object
// (e.g. classes:{{root: props.theme.materialUI.root}}), when using the withTheme higher component

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
      typeValue: 0,
    };
    this.fetchTreeData = this.fetchTreeData.bind(this);
  }

  // Couldn't get Material-UI to use something outside of the index to update active tab
  // had to manually assign active tab here in case there is a direct link to one of the routes
  componentDidMount() {
    const { location } = this.props;
    const currentPath = location.pathname;
    let currentTypeValue;
    switch (currentPath) {
      case '/Drink/Taps':
        currentTypeValue = 1;
        break;
      case '/Drink/Cans':
        currentTypeValue = 2;
        break;
      case '/Drink/Wine':
        currentTypeValue = 3;
        break;
      case '/Drink/Premium':
        currentTypeValue = 4;
        break;
      default:
        currentTypeValue = 0;
        break;
    }
    this.setState({
      typeValue: currentTypeValue,
    });
    this.fetchTreeData();
  }

  // ? event may be needed for MaterialUI function
  handleTypeChange = (event, typeValue) => {
    this.setState({ typeValue });
  };

  fetchTreeData() {
    const { client } = this.props;
    client.query({ query: DP_TAPS, variables: { location: 2 } });
  }

  render() {
    const {
      classes, location, navItems, locations, currentLocation, client,
    } = this.props;
    const { typeValue } = this.state;
    let showNav = false;
    let scrollMenu = true;

    // If at one of these locations, show location nav
    const locationNav = ['/Drink/Taps', '/Drink/Premium', '/Drink/Cans'];
    if (locationNav.includes(location.pathname)) {
      showNav = true;
    }

    // If screen is smaller than this, start scrolling nav
    if (window.innerwidth < 500) { scrollMenu = true; }

    return (
      <DrinkNavWrapper>
        {/** Drink Type Nav * */}
        <DrinkTypesNav>
          <Tabs
            centered={!scrollMenu}
            scrollable={!!scrollMenu}
            scrollButtons="auto"
            onChange={this.handleTypeChange}
            value={typeValue}
            classes={{
              indicator: classes.indicator,
              root: classes.tabsRoot,
            }}
          >
            {navItems.map((navItem, index) => (
              <Tab
                key={shortid.generate()}
                value={index}
                label={navItem.label}
                component={Link}
                to={`/Drink/${navItem.slug}`}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.tabSelected,
                }}
              />
            ))}
          </Tabs>
        </DrinkTypesNav>

        {/** Restaurant Location Nav - Shown based on above logic for showNav boolean
         * * value is -1 because Digital Pour starts indexing at 1 instead of 0
         * * and MaterialUI wasn't handling it well
         * */}
        <LocationsNav className={showNav ? 'showNav' : null}>
          <Tabs
            fullWidth
            value={currentLocation - 1}
            classes={{
              indicator: classes.indicator,
              root: classes.tabsRoot,
            }}
          >
            {locations.map(l => (
              <Mutation key={shortid.generate()} mutation={TOGGLE_LOCATION}>
                {selectLocation => (
                  <Tab
                    value={l.id - 1}
                    label={l.label}
                    onClick={() => selectLocation({
                      variables: { currentLocation: l.id },
                    })
                    }
                    classes={{
                      root: classes.tabRoot,
                      selected: classes.tabSelected,
                    }}
                    onMouseOver={() => client.query({
                      query: DP_TAPS,
                      variables: { location: l.id },
                    })
                    }
                    onFocus={() => client.query({
                      query: DP_TAPS,
                      variables: { location: l.id },
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
  padding: 2rem;
`;
const LocationsNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  opacity: 0;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-bottom: 20px;
  &.showNav {
    display: flex;
    opacity: 1;
    ${props => props.theme.fontStyles.subheading};
    font-style: italic;
  }
`;
