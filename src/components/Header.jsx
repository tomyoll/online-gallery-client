import React from 'react';
import {AppBar, Avatar, Button, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";
import PageSettingsButton from "./PageSettingsButton";

const useStyles = makeStyles({
  toolBarContainer: {
    height: 64,
    display: 'flex',
    justifyContent: 'space-between'
  },
  avatarContainer: {
    minWidth: 100,
    width: '7%',
    display: 'flex',
    justifyContent: 'space-between',
  }
})

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolBarContainer}>
        <div className={classes.avatarContainer}>
          <Avatar sx={{width: 54, height: 54}} alt="Remy Sharp" src="https://imgur.com/user/liayabbay/avatar"/>
            <PageSettingsButton handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} open={open}/>
        </div>
        <Button onClick={() => { history.push('/') }}> Home </Button>
        <Button onClick={() => { history.push('/auth') }}> Log in </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
