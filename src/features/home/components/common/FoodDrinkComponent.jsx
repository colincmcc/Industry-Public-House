import React from "react";
import shortid from "shortid";
import styled from "styled-components";

const FoodDrinkComponent = props => {
  return (
    <FoodMenuWrapper>
      {props.foods.map(foodItem => (
        <FoodListing key={shortid.generate()}>
          <FoodHeader>
            <FoodTitle dangerouslySetInnerHTML={{ __html: foodItem.name }} />
            <FoodPrice
              dangerouslySetInnerHTML={{
                __html: foodItem.price
              }}
            />
          </FoodHeader>
          <FoodDescription
            dangerouslySetInnerHTML={{ __html: foodItem.description }}
          />
        </FoodListing>
      ))}
    </FoodMenuWrapper>
  );
};

export default FoodDrinkComponent;

const FoodMenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.whiteTheme};
  text-align: left;
  padding: 0 2em;
`;

const FoodListing = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const FoodHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${props => props.theme.fontSizes.medium.size};
`;
const FoodTitle = styled.div`
  display: flex;
`;
const FoodPrice = styled.div`
  display: flex;
  padding: 0 1em;
`;
const FoodDescription = styled.p``;
