import React from 'react'
import {useState,useEffect} from 'react';
import {Box, Grid, FilledInput,Select,MenuItem, Dialog, DialogTitle,DialogActions,DialogContent, makeStyles, Typography,Button,IconButton, CircularProgress} from '@material-ui/core';
import {Close as CloseIcon} from "@material-ui/icons"
const useStyles= makeStyles((theme) => ({
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transition: ".3s",
        cursor: "pointer",
        fontWeight:600,
        border:  '1px solid black',
        color: "Black",

        '&:hover':{
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
        },
    },
    included:{
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
}));

const initState={
    title:"",
    type:"Full time",
    companyName:"",
    companyUrl:"",
    location: "Remote",
    link:"",
    description: "",
    skills:[],
};

function NewJobModal({postJob,newJobModal,closeModal}) {

    
    const handleSubmit= async()=>{

        for(const field in jobDetails){
            console.log(jobDetails[field]);

            if(typeof jobDetails[field]=== 'string' && !jobDetails[field]){ alert("Please Fill all the fields");
                return console.log("Not validated");}
        }
        
        console.log("validated");
        setLoading(true);
        await postJob(jobDetails);
        closingModal();
    }
    const [loading,setLoading]= useState(false);
    const [jobDetails,SetJobDetails]=useState(initState);
    
    const handleChange= e =>{
        e.persist();
        SetJobDetails(oldState=>({...oldState,[e.target.name]:e.target.value}))
    };
     const addRemoveSkill = skill=>{
            jobDetails.skills.includes(skill)
            ? SetJobDetails(oldState =>({...oldState,skills: oldState.skills.filter(s=>s!== skill),
            }))
                //removing
            :
            SetJobDetails(oldState=> ({...oldState,skills: oldState.skills.concat(skill),
            }))
            //adding
     }
     const closingModal=()=>{
         SetJobDetails(initState);
         setLoading(false);
         closeModal();

     }
     
    const classes= useStyles();
    const skills=['JavaScript',"C","C++","ReactJs","FireBase","SQL","Relational Databases","Devops"];
    console.log(jobDetails);
    return (
        <div>
            <Dialog open={newJobModal} fullWidth>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        Post Job 
                        <IconButton onClick={closingModal}>
                            <CloseIcon/>
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FilledInput autoComplete="off"  
                            onChange={handleChange}
                            placeholder="Job Title*" 
                            name="title"
                            value={jobDetails.title}
                            disableUnderline fullWidth ></FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                        <Select fullWidth
                        onChange={handleChange}
                            name="type"
                            value={jobDetails.type}
                         disableUnderline
                          variant="filled" 
                          >
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput 
                            onChange={handleChange}
                            name="companyName"
                            value={jobDetails.companyName}
                            autoComplete="off" placeholder="Company Name*" disableUnderline fullWidth ></FilledInput>
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput name="companyUrl"
                            onChange={handleChange}
                            value={jobDetails.companyUrl}
                            autoComplete="off" placeholder="Company Url*" disableUnderline fullWidth ></FilledInput>
                        </Grid>

                        <Grid   item xs={6}>
                            <Select fullWidth 
                            onChange={handleChange}
                            name="location"
                            value={jobDetails.location}
                             disableUnderline
                              variant="filled" >
                                <MenuItem value="Remote">Remote</MenuItem>
                                <MenuItem value="In-office">In-office</MenuItem>
                            </Select>
                        </Grid>
                        <Grid   item xs={6}>
                            <FilledInput
                            onChange={handleChange}
                            name="link"
                            value={jobDetails.link}
                             autoComplete="off"
                              placeholder="Job link*"
                               disableUnderline fullWidth ></FilledInput>
                        </Grid>
                        <Grid   item xs={12}>
                            <FilledInput 
                            onChange={handleChange}
                            name="description"
                            value={jobDetails.description}
                            autoComplete="off"
                             placeholder="Job Description*" 
                            disableUnderline 
                            fullWidth 
                            multiline
                            rows={3}></FilledInput>
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Typography>Skills*</Typography>
                        <Box display="flex" >
                            {skills.map((skill)=>
                            <Box onClick={() => addRemoveSkill(skill)} className={ jobDetails.skills.includes(skill)? classes.included : classes.skillChip } key={skill}>{skill}</Box>)}
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box color="red"
                     width="100%" 
                     display="flex"
                      justifyContent="space-between"
                      alignItems="center">
                        <Typography variant="caption">*Required Fields</Typography>
                        <Button onClick={handleSubmit} disabled={loading}
                        variant="contained" disableUnderline color="primary">
                            {loading? (<CircularProgress color="secondary" size="22"/>):
                            ("Post Job")}
                            
                            </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default NewJobModal
