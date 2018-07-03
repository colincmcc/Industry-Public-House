import React from "react";
import styled from "styled-components";
import FoodNavComponent from "./FoodNavComponent";
import FoodDrinkComponent from "../common/FoodDrinkComponent";

const FoodComponent = props => {
  const navItems = [
    { label: "Brunch", link: "/Home/Food/Brunch", slug: "brunch" },
    { label: "Starters", link: "/Home/Food/Starters", slug: "starters" },
    { label: "Greens", link: "/Home/Food/Greens", slug: "greens" },
    { label: "Handhelds", link: "/Home/Food/Handhelds", slug: "handhelds" },
    { label: "Burghers", link: "/Home/Food/Burghers", slug: "burghers" },
    { label: "Sustenance", link: "/Home/Food/Sustenance", slug: "sustenance" }
  ];
  return (
    <FoodWrapper>
      <FoodNavComponent
        client={props.client}
        selectedFoodType={props.selectedFoodType}
        navItems={navItems}
      />
      <FoodDrinkComponent foods={props.selectedFoods} />
    </FoodWrapper>
  );
};

export default FoodComponent;

const FoodWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 2em;
`;
