import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import theme from '../../common/styled/theme';

const MenuWrapper = (props) => {
  const { classes, children } = props;
  return (
    <MenuPaper>
      <Paper className={classes.paperRoot} elevation={2}>
        {children}
      </Paper>
    </MenuPaper>
  );
};

export default withStyles(theme.materialUI)(MenuWrapper);

const MenuPaper = styled.div`
  margin-bottom: 2rem;
`;
