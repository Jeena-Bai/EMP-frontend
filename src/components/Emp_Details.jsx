import { Grid, TextField } from '@mui/material'
import React from 'react'

const Emp_Details = () => {
  return (
 <div style={{marginLeft:'14%'}}>
  <Grid container spacing={4}>
   <Grid item xs={6} sm={4} md={5}>
   <TextField fullWidth
   required
   id="outlined-required"
   label="Employee Name"
   />
   </Grid>

   <Grid item xs={6} sm={4} md={5} >
   <TextField fullWidth
   required
   id="outlined-required"
   label="Designation"
   />
   </Grid>

   <Grid item xs={6} sm={4} md={5} >
   <TextField fullWidth
   required
   id="outlined-required"
   label="Location"
   />
   </Grid>

   <Grid item xs={6} sm={4} md={5} >
   <TextField fullWidth
   required
   id="outlined-required"
   label="Salary"
   />
   </Grid>

  </Grid>
  </div>
  )
}

export default Emp_Details
