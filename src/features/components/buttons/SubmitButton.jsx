import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import LoadingComponent from '../loading/LoadingComponent';
import theme from '../../../common/styled/theme';


const SubmitButton = (props) => {
  const {
    isValidating, isSubmitting, buttonText, classes, dirty,
  } = props;

  return (
    !isValidating || !isSubmitting ? (
      <Button
        disabled={!dirty || isSubmitting}
        type="submit"
        variant="contained"
        classes={{ contained: classes.homeButton }}
      >
        {buttonText}
      </Button>
    )

      : <LoadingComponent />
  );
};


export default withStyles(theme.materialUI)(SubmitButton);
