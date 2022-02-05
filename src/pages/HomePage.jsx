import React from 'react';
import ImagesList from "../components/ImagesList";
import AlternativeImagesList from "../components/AlternativeImagesList";

const HomePage = () => {
  if (localStorage.getItem('gridMode') === 'alternative') {
    return (
      <AlternativeImagesList />
    );
  } else {
    return (
      <ImagesList />
    )
  }
};

export default HomePage;
