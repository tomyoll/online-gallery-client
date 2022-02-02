import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import fetchMockData from "../api/MockData";
import {makeStyles} from "@mui/styles";
import ImageCard from './ImageCard'

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

const ImagesList = () => {
  const [mockData, setMockData] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    const data = await fetchMockData();
    console.log(data)
    setMockData(data);
  }, [])

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {mockData.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <ImageCard image={item.avatar}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImagesList;
