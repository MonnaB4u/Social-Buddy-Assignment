import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { Grid } from '@material-ui/core';
import './AllDataServer.css'

const PostDetails = () => {
    
    const {postId} = useParams()  

    ///// post //////

    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data =>setPost(data))
    })

    ///// Comment /////

    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data =>setComments(data))
    })

    const {body,title,id,userId} = post

    return (
       <div className="post-details"> 
            <h1 id="comment" >Comments</h1>
            {
                comments.map(comment => <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    
                  >
                       <Comment key={comment.id} comment={comment}></Comment>
                  </Grid>
                  
                 
                  )
                  
            }

        </div>
    );
        };

export default PostDetails;