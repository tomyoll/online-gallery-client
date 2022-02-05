import React, {useEffect, useState} from 'react';
import {IconButton, ImageList, ImageListItem, ImageListItemBar, useMediaQuery,} from "@mui/material";
import {makeStyles} from "@mui/styles";
import fetchMockData from "../api/MockData";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {observer} from "mobx-react-lite";

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 94,
    width: '100%',
    height: '100%',
    margin: 0,
  },
});

const breakpoints = {
  xs: 400,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const getColumns = (width) => {
  if (width < breakpoints.xs) {
    return 1
  } else if (width < breakpoints.sm) {
    return 2
  } else if (width < breakpoints.md) {
    return 3
  } else if (width < breakpoints.lg) {
    return 4
  } else if (width < breakpoints.xl) {
    return 5
  } else {
    return 6
  }
}

const ImagesList = observer(() => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mockData, setMockData] = useState([]);
  const [columns, setColumns] = useState(getColumns(window.innerWidth))
  const classes = useStyles();

  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth))
  }

  useEffect(async () => {
    const data = await fetchMockData();
    setMockData(data);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div style={prefersDarkMode ? {backgroundColor: '#121212', width: '100%'} : null}>
      <div className={classes.wrapper} >
        <ImageList variant="masonry" cols={columns} gap={20}>
          {mockData.map((item) => (
            <ImageListItem key={item.url}>
              <img
                src={item.url}
                srcSet={item.url}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                position={'top'}
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={'5'}
                  >
                    <FavoriteBorderIcon/>5
                  </IconButton>
                }
                actionPosition="left"
              />
              <ImageListItemBar
              title={item.name}
              subtitle={item.name}
              actionIcon={
                <IconButton
                  sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                  aria-label={'5'}
                >
                  <ChatBubbleOutlineIcon />
                </IconButton>
              }
            />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
});

export default ImagesList;
