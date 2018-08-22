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

const TapItemComponent = (props) => {
  const { classes, tap } = props;

  return (
    <ListItem classes={{ root: classes.root }} divider>
      <Avatar>
        <Placeholder />
      </Avatar>
      <ListItemText
        primary={`${tap.breweryName} - ${tap.bevName}`}
        secondary={
          `${tap.bevAbv
          }% - ${
            tap.bevStyle
          } - ${
            tap.breweryLocation}`
        }
      />
    </ListItem>
  );
};

export default withStyles(styles)(TapItemComponent);
