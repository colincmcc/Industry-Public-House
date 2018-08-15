import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../common/styled/theme';

const TextButton = (props) => {
  const { clickFunction, text, classes } = props;

  return (
    <Button onClick={clickFunction} classes={{ root: classes.buttonRoot }}>
      {text}
    </Button>
  );
};

export default withStyles(theme.materialUI)(TextButton);
