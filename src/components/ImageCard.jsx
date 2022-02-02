import React from "react";
import {makeStyles} from "@mui/styles";
import Card from '@mui/material/Card'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 14,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',
  },
  image: {
    width: '100%',
    minHeight: 150
  },
  pos: {
    marginBottom: 12
  }
});

const ImageCard = ({image}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <img className={classes.image} src={image}  alt={""}/>
      </CardContent>
      <CardActions>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, ligula ipsum vulputate diam, aliquam egestas nibh ante vel dui. Sed in tellus interdum eros vulputate placerat sed non enim. Pellentesque eget justo porttitor urna dictum fermentum sit amet sed mauris. Praesent molestie vestibulum erat ac rhoncus. Aenean nunc risus, accumsan nec ipsum et, convallis sollicitudin dui. Proin dictum quam a semper malesuada. Etiam porta sit amet risus quis porta. Nulla facilisi. Cras at interdum ante. Ut gravida pharetra ligula vitae malesuada. Sed eget libero et arcu tempor tincidunt in ac lectus. Maecenas vitae felis enim. In in tellus consequat, condimentum eros vitae, lacinia risus. Sed vehicula sem sed risus volutpat elementum.

          Nunc accumsan tempus nunc ac aliquet. Integer non ullamcorper eros, in rutrum velit. Proin cursus orci sit amet lobortis iaculis. Praesent condimentum eget felis ut laoreet. Aliquam sodales dolor id mi iaculis, non fermentum leo viverra. Aenean aliquet condimentum placerat. Aenean aliquet diam arcu. Curabitur ac ligula sem. Mauris tincidunt mauris at ligula tincidunt interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus sagittis, eros.
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ImageCard;
