import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { DP_TAPS } from "./DrinkContainer";

// * Prefetches drink items on mouse hover for faster loading


const DrinkNavComponent = props => {
  console.log(props);
  return (
    <DrinkNavWrapper>
      {props.navItems.map((navItem, index) => (
       <Mutation>

          <DrinkNavItem
            onClick={() => props.drinkMenuToggle(navItem.slug)}
            key={shortid.generate()}
          >
            {navItem.label}
          </DrinkNavItem>
        </Mutation>
      ))}
      <br />
      {props.locations.map(location => (
        <DrinkNavItem
          onClick={() => props.locationToggle(location.slug)}
          key={shortid.generate()}
          onMouseOver={() =>
            props.client.query({
              query: DP_TAPS,
              variables: { location: location.id }
            })
          }
        >
          {location.label}
        </DrinkNavItem>
      ))}
    </DrinkNavWrapper>
  );
};

export default DrinkNavComponent;

const DrinkNavWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
const DrinkNavItem = styled.div`
  display: flex;
  padding: 1em;
  font-size: 1.25em;
  color: white;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;
