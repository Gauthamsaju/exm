import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get(" http://localhost:3000/posts")
        .then(response=>{
            setPosts(posts=response.data)
            console.log(response.data)
        })
        .catch(error=>console.log(error))
    })

    const deleteValues=()=>
    {
        axios.delete("http://localhost:3000/posts")
        .then(response=>{
            alert('deleted')
            window.location.reload(false)
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Book Title</TableCell>
                    <TableCell>Genre</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Publish Date</TableCell>
                    <TableCell>Published By</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
            {posts.map((value,index)=>{
                        return<TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.a}</TableCell>
                            <TableCell>{value.b}</TableCell>
                            <TableCell>{value.c}</TableCell>
                            <TableCell>{value.d}</TableCell>
                            <TableCell>{value.e}</TableCell>
                            <TableCell><Button variant='contained' color="error" onClick={()=>deleteValues(value.id)}>delete</Button></TableCell>
                        </TableRow>
                    })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
