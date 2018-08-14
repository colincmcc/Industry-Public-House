import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Placeholder from '../../../common/assets/img/Industry_fullLogo_sm_wht.svg';


const styles = {
  root: {
    width: '100%',
    breakInside: 'avoid-column',
  },
};

const TapItemComponent = props => (
  <ListItem classes={{ root: props.classes.root }} divider>
    <Avatar>
      <Placeholder />
    </Avatar>
    <ListItemText
      primary={`${props.tap.breweryName} - ${props.tap.bevName}`}
      secondary={
          `${props.tap.bevAbv
          }% - ${
            props.tap.bevStyle
          } - ${
            props.tap.breweryLocation}`
        }
    />
  </ListItem>
);

export default withStyles(styles)(TapItemComponent);
