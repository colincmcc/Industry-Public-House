import React from "react";
import Button from "@material-ui/core/Button";
import theme from "../../common/styled/theme";
import { withStyles } from "@material-ui/core/styles";

const TextButton = props => {
  const { clickFunction, text, classes, btnComponent, to } = props;

  return (
    <Button onClick={clickFunction} classes={{ root: classes.buttonRoot }}>
      {text}
    </Button>
  );
};

export default withStyles(theme.materialUI)(TextButton);
