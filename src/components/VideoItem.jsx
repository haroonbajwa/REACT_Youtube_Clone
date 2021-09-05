import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display:'flex', alignItems:'center', cursor:'pointer' }} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: '20px', width:'200px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <div style={{ display: 'block'}}>
                    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                    <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
                </div>
            </Paper>
        </Grid>
    )
}

export default VideoItem
