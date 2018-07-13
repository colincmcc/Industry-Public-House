import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import List from "@material-ui/core/List";
import theme from "../../common/styled/theme";
import { withStyles } from "@material-ui/core";
import LoadingComponent from "../../common/components/loading/LoadingComponent";

const FoodDrinkComponent = props => {
  const { classes } = props;

  if (props.loading) return <LoadingComponent />;
  if (props.error) return <LoadingComponent />;

  return (
    <FoodMenuWrapper>
      <List className={classes.listRoot}>
        {props.menuItems.map(foodItem => {
          // * The description field is a Advanced Custom Fields (ACF) wysiwyg editor and needs dangerously set html
          const primary = <FoodHeader>{foodItem.name}</FoodHeader>;
          const secondary = (
            <FoodDescription
              dangerouslySetInnerHTML={{ __html: foodItem.description }}
            />
          );
          return (
            <ListItem divider key={shortid.generate()}>
              <ListItemText primary={primary} secondary={secondary} />
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
const FoodDescription = styled.span`
  opacity: 0.83;
  flex-wrap: wrap;
`;
