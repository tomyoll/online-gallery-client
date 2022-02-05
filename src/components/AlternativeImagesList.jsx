import React, {useEffect, useState} from 'react';
import fetchMockData from "../api/MockData";
import {makeStyles} from "@mui/styles";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {IconButton, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";
import sliceArrayToParts from "../utils/sliceArrayToParts";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const useStyles = makeStyles({
  wrapper: {
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridColumn: {
    marginTop: 30,
    width: 240,
    float: 'left',
  },
  gridColumnMargin: {
    marginTop: 30,
    width: 240,
    float: 'left',
    marginLeft: 16,
  },
  post: {
    height: 'auto',
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
  },
  postItem: {
    height: '100%',
    display: 'block',
    marginBottom: 30,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundColor: '#2e3035',
  },
  postItemContainer: {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  postItemMedia: {
    overflow: 'hidden',
  },
  image: {
    width: '100%'
  },
  postItemTitleWrapper: {
    width: '100%',
    textOverflow: "ellipsis",
    backgroundColor: '#474a51',
    borderBottom: '4px solid transparent',
    paddingTop: 10,
    color: '#fff',
    marginTop: 0,
    bottom: 0,
    left: 0
  },
  postItemTitle: {
    maxWidth: 200,
    marginLeft: 15,
  },
  postItemButtonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const AlternativeImagesList = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();
  const classes = useStyles();
  const [mockData, setMockData] = useState([]);

  useEffect(async () => {
    const data = await fetchMockData();
    setMockData(sliceArrayToParts(data, 6));
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div style={prefersDarkMode ? {backgroundColor: '#121212'} : null}>
        <div className={classes.wrapper}>
          <div>
            <div className={classes.gridColumn}>
              {mockData.length > 0 && mockData[0].map((item) => (
                <div key={item.id} className={classes.post}>
                  <a className={classes.postItem}>
                    <div className={classes.postItemContainer}>
                      <div className={classes.postItemMedia}>
                        <div>
                          <LazyLoadImage effect="blur" src={item.url} className={classes.image}/>
                          <div className={classes.postItemTitleWrapper}>
                            <Typography noWrap className={classes.postItemTitle}>{item.name}</Typography>
                            <div className={classes.postItemButtonsWrapper}>
                              <IconButton>
                                <FavoriteBorderIcon style={{maxWidth: 20}}/>
                                <Typography>5</Typography>
                              </IconButton>
                              <IconButton>
                                <ChatBubbleOutlineIcon  style={{maxWidth: 20}}/>
                                <Typography>5</Typography>
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            {mockData.map((i) => {
              if (mockData.indexOf(i) === 0) return null
              return (
                <div key={mockData.indexOf(i)} className={classes.gridColumnMargin}>
                  {i.map((item) => (
                    <div key={item.id} className={classes.post}>
                      <a className={classes.postItem}>
                        <div className={classes.postItemContainer}>
                          <div className={classes.postItemMedia}>
                            <div>
                              <LazyLoadImage effect="blur" src={item.url} className={classes.image}/>
                              <div className={classes.postItemTitleWrapper}>
                                <Typography noWrap className={classes.postItemTitle}>{item.name}</Typography>
                                <div className={classes.postItemButtonsWrapper}>
                                  <IconButton>
                                    <FavoriteBorderIcon style={{maxWidth: 20}}/>
                                    <Typography>5</Typography>
                                  </IconButton>
                                  <IconButton>
                                    <ChatBubbleOutlineIcon  style={{maxWidth: 20}}/>
                                    <Typography>5</Typography>
                                  </IconButton>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AlternativeImagesList;
