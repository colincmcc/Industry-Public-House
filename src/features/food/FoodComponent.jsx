import React from "react";
import styled from "styled-components";
import FoodNavComponent from "./FoodNavComponent";
import FoodDrinkComponent from "../common/FoodDrinkComponent";

const FoodComponent = props => {
  const navItems = [
    { id: 0, label: "Brunch", link: "/Home/Food/Brunch", slug: "brunch" },
    { id: 1, label: "Starters", link: "/Home/Food/Starters", slug: "starters" },
    { id: 2, label: "Greens", link: "/Home/Food/Greens", slug: "greens" },
    {
      id: 3,
      label: "Handhelds",
      link: "/Home/Food/Handhelds",
      slug: "handhelds"
    },
    { id: 4, label: "Burghers", link: "/Home/Food/Burghers", slug: "burghers" },
    {
      id: 5,
      label: "Sustenance",
      link: "/Home/Food/Sustenance",
      slug: "sustenance"
    }
  ];
  return (
    <FoodWrapper>
      <FoodNavComponent client={props.client} navItems={navItems} />
      <FoodDrinkComponent foods={props.selectedFoods} />
    </FoodWrapper>
  );
};

export default FoodComponent;

const FoodWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 2em 0;
`;
