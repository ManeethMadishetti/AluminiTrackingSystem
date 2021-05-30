import React from 'react';
import {Box, Grid, FilledInput,Select,MenuItem, Dialog, DialogTitle,DialogActions,DialogContent, makeStyles, Typography,Button,IconButton, CircularProgress} from '@material-ui/core';
import {Close as CloseIcon} from "@material-ui/icons"
import theme from './theme';

const useStyles= makeStyles({

    info: {
        '& > *':{
            margin: '5px',

        }
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transition: ".3s",
        cursor: "pointer",
        fontWeight:600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
})
function ViewJobModal(props) {
    const classes=useStyles();
    return (
        <div>
            <Dialog open={!!Object.keys(props.job).length} fullWidth>
                <DialogTitle>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            {props.job.title}@{props.job.companyName}
                            <IconButton onClick={props.closeModal} >
                            <CloseIcon  />
                            </IconButton>
                        </Box>
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <Box display="flex" className={classes.info}>
                           <Typography variant="caption">Job Type:</Typography> 
                           <Typography variant="body2">{props.job.type}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box display="flex" className={classes.info}>
                           <Typography variant="caption">Job Location:</Typography> 
                           <Typography variant="body2">{props.job.location}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box display="flex" className={classes.info}>
                           <Typography variant="caption">Job Description:</Typography> 
                           <Typography variant="body2">{props.job.description}</Typography>

                        </Box>
                    </Box>
                    <Box>
                        <Box display="flex" className={classes.info}>
                           <Typography variant="caption">Company Name:</Typography> 
                           <Typography variant="body2">{props.job.companyName}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box display="flex" className={classes.info}>
                           <Typography variant="caption">Company Url:</Typography> 
                           <Typography variant="body2">{props.job.companyUrl}</Typography>
                        </Box>
                    </Box>
                    <Box ml={.5}>
                        <Box display="flex" >
                           <Typography variant="caption">Skills:</Typography> 
                           <Grid container alignItems="center">
                               {props.job.skills && 
                                props.job.skills.map((skill)=>(
                                <Grid item key={skill} className={classes.skillChip}>
                                    {skill}
                                    </Grid>
                                ))}

                           </Grid>
                        </Box>
                    </Box>



                </DialogContent>
                <DialogActions>
                        <Button variant="outlined" component="a" href={props.job.link} target="_blank">Apply</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default ViewJobModal
