import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: 'green',
    maxWidth: 1045,
    padding:20,
    margin:20,
  },

  inline: {
    display: 'flex',
    textAlign: 'center',
  },
}));


const Comment = (props) => {

    const {name,email,body} = props.comment ;

    const [image, setImage] = useState(0);

    useEffect(()=>{
      const URL = 'https://randomuser.me/api/?results=1'
      fetch(URL)
      .then(res => res.json())
      .then(data=> setImage(data.results[0].picture.medium) )
    },[])

    const classes = useStyles();
    return (
      <div>
      
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {email}
              </Typography>
                <h4>Comments: </h4>{body}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
    
          
      </div>
    );
};

export default Comment;