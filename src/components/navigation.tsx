import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Take the Quiz</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
