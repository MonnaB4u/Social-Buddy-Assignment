import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 1045,
    padding:20,
    margin:20,
    backgroundColor: 'green',

  },
  media: {
    height: 140,
  },
 
});


const Post = (props) => {

    let {id, title,body} = props.post

    let history = useHistory();
    
    const btnHandle = () => {
      history.push(`/post/${id}`)
    }
    
    const classes = useStyles();

    return (
       <div>   
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h3>post: {body}</h3> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary"
        
        onClick={btnHandle}

        >
          Reade more
        </Button>
      
      </CardActions>
    </Card>
    
        </div>
    );
};

export default Post;