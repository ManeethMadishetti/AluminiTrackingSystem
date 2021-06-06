import React, { useState } from 'react'
import {Box, Select,Button,MenuItem,makeStyles, CircularProgress} from '@material-ui/core';

const useStyles= makeStyles({
    Wrapper:{
        border: '1px solid red',
        backgroundColor:"#fff",
        display: 'flex',
        boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius:"5px",
        "& > *":{
            flex:1,
            height:"45px",
            margin:"8px",
        },

    },
});
function SearchBar(fetchJobsCustom) {
    const [jobSearch,setJobSearch]=useState({
        type: 'Full time',
        location: 'Remote',
    });
    const [loading,setLoading]=useState(false);
    const handleChange= e =>{
        e.persist();
        setJobSearch(oldState=>({...oldState,[e.target.name]:e.target.value}))
    };
    console.log(jobSearch)
    const classes = useStyles();

    const search= async()=>{
        setLoading(true);
        await fetchJobsCustom(jobSearch);
        setLoading(false);

    }
    return (
        <div>
            <Box p={2} mt={-3} mb={2} className={classes.Wrapper}>
                <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled" >
                    <MenuItem value="Full time">Full time</MenuItem>
                    <MenuItem value="part time">Part time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                </Select>
                <Select  onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant="filled" >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In-office">In-office</MenuItem>
                </Select>
                <Button disabled={loading} onClick={search} variant="contained" color="primary" disableElevation>
                {loading? (<CircularProgress color="secondary" size="22"/>):
                            ("Search")}
                </Button>
            </Box>
        </div>
    )
}

export default SearchBar
