import React, { useState } from 'react'
import { Paper, TextField, Grid } from '@material-ui/core'

const SearchBar = ({ onFormSubmit }) => {

    const [searchTerm, setSearchTerm] = useState('youtube');
    

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(searchTerm);
    }

    return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <Grid container spacing={5}>
                <Grid item md={2} sm={2}>
                    <img style={{width:'100px'}} src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="YouTube" />
                </Grid>
                <Grid item md={9} sm={10}>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Search" onChange={handleChange} />
                    </form>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SearchBar
