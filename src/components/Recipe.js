import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 20
  },
  media: {
    height: 300,
  },
});

export default function Recipe({ recipe }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={recipe.recipe.image}
          title={recipe.recipe.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipe.recipe.label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={recipe.recipe.url}>
          Recipe
        </Button>
      </CardActions>
    </Card>
  );
}
