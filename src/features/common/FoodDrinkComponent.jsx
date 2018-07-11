import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import List from "@material-ui/core/List";
import theme from "../../common/styled/theme";
import { withStyles } from "@material-ui/core";

const FoodDrinkComponent = props => {
  const classes = props;
  console.log(classes);
  return (
    <FoodMenuWrapper className={classes.paperRoot}>
      <List>
        {props.foods.map(foodItem => {
          const primary = <FoodHeader>{foodItem.name}</FoodHeader>;
          const secondary = (
            <FoodDescription>{foodItem.description}</FoodDescription>
          );
          return (
            <ListItem
              classes={{ secondaryAction: classes.listSecondaryRoot }}
              key={shortid.generate()}
            >
              <ListItemText
                disableTypography={false}
                primary={primary}
                secondary={secondary}
              />
              <ListItemSecondaryAction
                classes={{ root: classes.listSecondaryRoot }}
              >
                {"$" + foodItem.price}
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </FoodMenuWrapper>
  );
};

export default withStyles(theme.materialUI)(FoodDrinkComponent);

const FoodMenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.blackTheme};
  text-align: left;
  font-size: ${props => props.theme.fontSizes.medium.size};
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
const FoodDescription = styled.div`
  opacity: 0.83;
  flex-wrap: wrap;
`;
