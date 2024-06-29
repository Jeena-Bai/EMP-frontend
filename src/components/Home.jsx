import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const Home = () => {
    const [data, setData] =useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        //console.log(res.data)
        setData(res.data)
      })
    },[])
  return(
    <div>
    <h2 style={{color:'navy',marginTop:'-65px'}}>EMPLOYEE DASHBOARD</h2>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default Home