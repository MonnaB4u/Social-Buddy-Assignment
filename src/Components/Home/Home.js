import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Grid } from '@material-ui/core';
import HomeLogo from '../HomeLogo/HomeLogo';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const URL = 'https://jsonplaceholder.typicode.com/posts'
        fetch(URL)
        .then(res =>res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
              
        <HomeLogo></HomeLogo>
        
            {
                posts.map(post => <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 

                  <Post key={post.id} post={post}></Post>

                   </Grid> )
            }
        </div>
    );
};

export default Home;