import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import artista from "../../images/artista.jpg";
import bohoc from "../../images/bohoc.jpg";
import buvesz from "../../images/buvesz.jpg";
import foka from "../../images/foka.jpg";
import maci from "../../images/maci.jpg";
import oroszlan from "../../images/oroszlan.jpg";

const data = [
  {
    picture: maci,
    title: "Medve",
    description: "Description about our talent in progress..",
  },
  {
    picture: artista,
    title: "Artista",
    description: "Description about our talent in progress..",
  },
  {
    picture: bohoc,
    title: "Bohóc",
    description: "Description about our talent in progress..",
  },
];
const data2 = [
  {
    picture: buvesz,
    title: "Bűvész",
    description: "Description about our talent in progress..",
  },
  {
    picture: oroszlan,
    title: "Oroszlán",
    description: "Description about our talent in progress..",
  },
  {
    picture: foka,
    title: "Fóka",
    description: "Description about our talent in progress..",
  },
];

const useStyles = makeStyles({
  root: {
    /* maxWidth: 345, */
  },
  media: {
    width: 200,
    height: 240,
    margin: "0.5em",
    marginLeft: "auto",
    marginRight: "auto"
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="gallery-container">
      <h1>Our team</h1>
      <Card style={{ display: "flex" }} id="gallery" className={classes.root}>
        {data.map((t, index) => {
          return (
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={t.picture}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {t.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          );
        })}
      </Card>
      <Card style={{ display: "flex" }} id="gallery" className={classes.root}>
        {data2.map((t, index) => {
          return (
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={t.picture}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {t.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          );
        })}
      </Card>
    </div>
  );
}
