import React from "react";
import { Link } from "react-router-dom";

import shortid from "shortid";
import styled from "styled-components";

const FoodNavComponent = () => {
  const navItems = [
    { label: "Brunch", link: "/Home/Food/Brunch" },
    { label: "Starters", link: "/Home/Food/Starters" },
    { label: "Greens", link: "/Home/Food/Greens" },
    { label: "Handhelds", link: "/Home/Food/Handhelds" },
    { label: "Burghers", link: "/Home/Food/Burghers" },
    { label: "Sustenance", link: "/Home/Food/Sustenance" }
  ];
  return (
    <FoodNavWrapper>
      {navItems.map((navItem, index) => (
        <FoodNavItem key={shortid.generate()}>
          <Link activeClassName="active" to={navItem.link}>
            {navItem.label}
          </Link>
        </FoodNavItem>
      ))}
    </FoodNavWrapper>
  );
};

export default FoodNavComponent;

const FoodNavWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;
const FoodNavItem = styled.div`
  display: flex;
  padding: 1em;
  font-size: 1.25em;
  color: white;
`;
