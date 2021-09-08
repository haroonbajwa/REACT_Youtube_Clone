import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import { SearchBar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube'
import VideoComments from './components/comments/VideoComments'

const App = () => {
    
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoComments, setVideoComments] = useState([]);

    useEffect(() => {
        handleSubmit('reactjs');
    }, [])

    const handleSubmit = async (searchTerm) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 15,
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


    useEffect(() => {
        const getComments = async () => {
            const response = await youtube.get(`commentThreads?part=snippet&videoId=${selectedVideo?.id?.videoId}&key=AIzaSyC5lsKNcy9PkCazwwmjYsds64brfTOKT4E`)
            
            setVideoComments(response.data.items);
        }
        getComments();

    }, [selectedVideo])


    const onVideoSelect = (video) =>{
        setSelectedVideo(video);
    }

    return (
        <Grid justifyContent="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <VideoDetail video={selectedVideo} />
                        {   selectedVideo &&
                            (<Grid item md={12} xs={12}>
                                <VideoComments videoComments={videoComments} />
                            </Grid>)
                        }   
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
