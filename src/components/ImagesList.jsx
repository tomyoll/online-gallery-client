import React, {useEffect, useState} from 'react';
import {IconButton, ImageList, ImageListItem, ImageListItemBar,} from "@mui/material";
import {makeStyles} from "@mui/styles";
import fetchMockData from "../api/MockData";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {observer} from "mobx-react-lite";
import {getColumns} from "../utils/ImageGridUtils";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#121212',
    paddingTop: 94,
    width: '100%',
    height: '100%',
    margin: 0,
  },
});

const ImagesList = observer(() => {
  const [mockData, setMockData] = useState([]);
  const [columns, setColumns] = useState(getColumns(window.innerWidth))
  //const [currentPage, setCurrentPage] = useState(1);
  //const [fetching, setFetching] = useState(true);

  const classes = useStyles();

  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth))
  }

  // const scrollHandler = (e) => {
  //   const scrollHeight = e.target.documentElement.scrollHeight;
  //   const scrollTop = e.target.documentElement.scrollTop;
  //   const innerHeight = window.innerHeight;
  //   if (scrollHeight - (scrollTop + innerHeight) < 100) {
  //     setFetching(true);
  //   }
  // }

  // useEffect(async () => {
  //   if (fetching) {
  //     const data = await fetchMockData(currentPage);
  //     console.log(data)
  //     setMockData([...mockData, ...data]);
  //     //setCurrentPage(prevState => prevState + 1)
  //     //setFetching(false);
  //   }
  // }, [fetching])

  useEffect(async () => {
    const data = await fetchMockData();
        console.log(data)
        setMockData(data);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    //document.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      //document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <ImageList variant="masonry" cols={columns} gap={20}>
        {mockData.map((item) => (
          <ImageListItem key={item.id}>
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
                  sx={{color: 'white'}}
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
                  <ChatBubbleOutlineIcon/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
});

export default ImagesList;
