import React from 'react'
import { Grid } from '@material-ui/core'

import { SearchBar, VideoList, VideoDetail } from './components'
import youtube from './api/youtube'

const App = () => {

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

            console.log(response.data.items);

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <Grid justifyContent="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App
