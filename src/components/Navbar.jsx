import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" style={{marginBottom:'8%'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EMPLOYEE
          </Typography>
          <Link to={"/"}><Button style={{color:"white"}}>Home</Button></Link>
          <Link to={"/details"}><Button style={{color:"white"}}>Details</Button></Link>
        
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar