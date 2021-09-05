import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import { SearchBar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube'

const App = () => {
    
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);


    useEffect(() => {
        handleSubmit('reactjs');
    }, [])

    const handleSubmit = async (searchTerm) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: 'AIzaSyC5lsKNcy9PkCazwwmjYsds64brfTOKT4E',
                    q: searchTerm,
                }
            });

            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);

        } catch(error) {
            console.log(error);
        }
    }

    const onVideoSelect = (video) =>{
        setSelectedVideo(video);
    }

    return (
        <Grid justifyContent="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App
