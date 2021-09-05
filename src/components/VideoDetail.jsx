import React from 'react'
import  { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <>
            <Paper elevation={6} style={{height: '70vh'}}>
                <iframe frameBorder="0" width="100%" height="100%" title="video player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h6">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VideoDetail
