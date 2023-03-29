import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var[input,SetInput]=useState({
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
    })

    const handleinput =(e) =>
    {
        const{name,value}=e.target
        SetInput({...input,[name]:value})
    }

    const readvalues=() =>{
            alert('succesfull')
            axios.post("http://localhost:3000/posts",input)
        .then(response=>{
            alert('succesfull')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <br/>
        <br/>
      <TextField label='Book Title' name='a' value={input.a}  onChange={handleinput}></TextField>
      <br/>
        <br/>
      <TextField label='Genre' name='b' value={input.b}  onChange={handleinput}></TextField>
      <br/>
        <br/>
      <TextField label='Author' name='c' value={input.c}  onChange={handleinput}></TextField>
      <br/>
        <br/>
      <TextField label='Publish Date' name='d' value={input.d}  onChange={handleinput}></TextField>
      <br/>
        <br/>
      <TextField label='Published by' name='e' value={input.e}  onChange={handleinput}></TextField>
      <br/>
      <br/>
      <Button variant='contained' color='inherit' onClick={readvalues}>Submit</Button>

    </div>

  )
}

export default Add
