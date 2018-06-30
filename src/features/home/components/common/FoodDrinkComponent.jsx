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
  display: grid;
  grid: auto-flow / 1fr 1fr;
  width: 100%;
  height: 100%;
  color: white;
  text-align: left;
`;

const FoodListing = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const FoodHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.25em;
`;
const FoodTitle = styled.h2`
  display: flex;
  font-size: 1.25em;
`;
const FoodPrice = styled.h2`
  display: flex;
  padding: 0 1em;
  font-size: 1.25em;
`;
const FoodDescription = styled.p``;
