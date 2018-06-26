import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import FoodDrinkComponent from "../common/FoodDrinkComponent";

const FoodMenuComponent = props => {
  const starters = props.foods.filter(
    food => food.node.foodTypeField.value === "starters"
  );
  console.log(starters);
  const greens = props.foods.filter(
    food => food.node.foodTypeField.value === "greens"
  );
  const handhelds = props.foods.filter(
    food => food.node.foodTypeField.value === "handhelds"
  );
  const burghers = props.foods.filter(
    food => food.node.foodTypeField.value === "burghers"
  );
  const sustenance = props.foods.filter(
    food => food.node.foodTypeField.value === "sustenance"
  );
  const brunch = props.foods.filter(
    food => food.node.foodTypeField.value === "brunch"
  );
  return (
    <FoodMenuWrapper id="foodMenu">
      {/* Redirect to first menu item so something is loaded */}
      <Redirect from="/" exact to="/Home/Food/Brunch" />
      <Redirect from="/Home" exact to="/Home/Food/Brunch" />
      <Switch>
        <Route
          exact
          path="/Home/Food/Brunch"
          render={() => <FoodDrinkComponent food={brunch} />}
        />
        <Route
          exact
          path="/Home/Food/Starters"
          food={starters}
          render={() => <FoodDrinkComponent food={starters} />}
        />
        <Route
          exact
          path="/Home/Food/Greens"
          render={() => <FoodDrinkComponent food={greens} />}
        />
        <Route
          exact
          path="/Home/Food/Handhelds"
          render={() => <FoodDrinkComponent food={handhelds} />}
        />
        <Route
          exact
          path="/Home/Food/Burghers"
          render={() => <FoodDrinkComponent food={burghers} />}
        />
        <Route
          exact
          path="/Home/Food/Sustenance"
          render={() => <FoodDrinkComponent food={sustenance} />}
        />
      </Switch>
    </FoodMenuWrapper>
  );
};

export default FoodMenuComponent;

const FoodMenuWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
