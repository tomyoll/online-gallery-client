import React from 'react';
import {AppBar, Avatar, Box, Container, Toolbar, Typography, useMediaQuery} from "@mui/material";
import {makeStyles} from "@mui/styles";
import ImagesList from "../components/ImagesList";

const useStyles = makeStyles({
  profileCover: {
    width: '100%',
  },
  profileMedia: {
    display: 'flex',
    flexDirection: 'start',
  },
  avatar: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 100,
  },
  profileMediaData: {
    margin: 'auto 24px'
  },
  profileMediaUser: {
    fontSize: 44,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  profileMediaStats: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'uppercase',
    marginTop: 8,
  },
  postsContainer: {
    marginBottom: 10,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  postsUnderLine: {
    marginTop: 10,
    border: '2px solid white',
    borderRadius: 2,
  },
  postsList: {
    marginTop: 30,
  }
})

const ProfilePage = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const classes = useStyles();
  return (
      <div style={prefersDarkMode ? {backgroundColor: '#121212'} : null}>
        <AppBar position="static" style={{marginTop: 64}}>
          <Toolbar disableGutters>
            <div className={classes.profileCover}>
              <div className={classes.profileMedia}>
                <Avatar className={classes.avatar} sx={{width: 128, height: 128}} alt="Remy Sharp"
                        src="https://imgur.com/user/liayabbay/avatar"/>
                <Box className={classes.profileMediaData}>
                  <div className={classes.profileMediaUser}>tomyoll</div>
                  <Container className={classes.profileMediaStats}>
                    10 POSTS
                  </Container>
                </Box>
              </div>
              <Box className={classes.postsContainer}>
                <Typography>
                  POSTS
                  <div className={classes.postsUnderLine}/>
                </Typography>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        <ImagesList />
      </div>
  );
};

export default ProfilePage;
