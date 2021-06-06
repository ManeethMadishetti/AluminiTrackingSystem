import { CircularProgress, Grid,Box } from '@material-ui/core'
import React from 'react'
import { ThemeProvider } from 'react-bootstrap'
import Header_index from './Header_index'
import JobCard from './JobCard'
import NewJobModal from './NewJobModal'
import SearchBar from './SearchBar'
import theme from './theme'

import {useState,useEffect} from 'react';
import {firebase,db} from '../firebase/config'
import { FiberSmartRecordRounded } from '@material-ui/icons'
import ViewJobModal from './ViewJobModal'
function Job() {
    const [jobs,setJobs]= useState([]);
    const [loading,setLoading]= useState(true);
    const fetchJobs= async()=>{
        setLoading(true);
        const req= await db.collection('jobs')
        .get()
        .then(querySnapshot => {
            
            const data = querySnapshot.docs.map(job => ({...job.data(), id:job.id}));
             console.log(data); // array of cities objects
                setJobs(data);
                setLoading(false);
            })
        
    };

    const fetchJobsCustom = async(jobSearch)=>{
        setLoading(true);
        setCustomSearch(true);
        const req= await db.collection('jobs')
        .where('location','==',jobSearch.location)
        .where('type','==',jobSearch.type)
        .get()
        .then(querySnapshot => {
            
            const data = querySnapshot.docs.map(job => ({...job.data(), id:job.id}));
             console.log(data); // array of cities objects
                setJobs(data);
                setLoading(false);
            })
    };
    const postJob = async jobDetails =>{
        await db.collection('jobs').add(jobDetails);
         fetchJobs();

    }
    const [customSearch, setCustomSearch]=useState(false);
    const [newJobModal,setNewJobModal]=useState(false);
    const [viewJob, setViewJob]= useState({});


    useEffect(()=>{
        fetchJobs();
    },[])
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Header_index openNewJobModal={()=>setNewJobModal(true)}/>
            <NewJobModal closeModal={()=>setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob}/>
            <ViewJobModal job={viewJob} closeModal={()=>setViewJob({})} />
            <Box mb={3}>
            <Grid container justify='center'>
                <Grid item xs={10}>
                    <SearchBar fetchJobsCustom={fetchJobsCustom}  />
                    {
                        loading?<Box display="flex" justifyContent="center"> <CircularProgress/></Box>
                        : 
                        (                            
                            jobs.map(job => <JobCard open={()=> setViewJob(job)} key={job.id} {...job} /> )
                        )
                    }
                   

                </Grid>
            </Grid>
            </Box>
            </ThemeProvider>

        </div>
    )
}

export default Job
