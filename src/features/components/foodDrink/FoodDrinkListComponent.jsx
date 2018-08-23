import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core';
import theme from '../../../common/styled/theme';
import LoadingComponent from '../loading/LoadingComponent';
import ErrorComponent from '../loading/ErrorComponent';

const FoodDrinkListComponent = (props) => {
  const {
    classes, loading, error, data,
  } = props;
  if (loading) return <LoadingComponent />;
  if (error || !data.menuItems) return <ErrorComponent />;
  const { menuItems } = data;

  return (
    <FoodMenuWrapper>
      <List className={classes.listRoot}>
        {menuItems.map((menuItem) => {
          // * The description field is a Advanced Custom Fields (ACF)
          //*  wysiwyg editor and needs dangerously set html
          const primary = <FoodHeader>{menuItem.acf.name}</FoodHeader>;
          const secondary = (
            <FoodDescription
              dangerouslySetInnerHTML={{ __html: menuItem.acf.description }}
            />
          );
          return (
            <ListItem
              divider
              classes={{
                root: classes.listItemRoot,
                container: classes.listItemContainer,
              }}
              key={shortid.generate()}
            >
              <ListItemText primary={primary} secondary={secondary} />
              <ListItemSecondaryAction
                classes={{ root: classes.listSecondaryRoot }}
              >
                {menuItem.acf.price ? `$${menuItem.acf.price}` : null}
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </FoodMenuWrapper>
  );
};

export default withStyles(theme.materialUI)(FoodDrinkListComponent);

const FoodMenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.blackTheme};
  text-align: left;
  font-size: ${props => props.theme.fontSizes.medium.size};
`;

const FoodHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${props => props.theme.fontSizes.medium.size};

  ${props => props.theme.media.tablet_portrait_up`
   ${theme.fontStyles.text}
  `};
`;
const FoodDescription = styled.span`
  opacity: 0.83;
  flex-wrap: wrap;
`;
