import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
const Add = ({person}) => {
  const [form,setForm]=useState({
    title:person ? person.title || '':'',
    description:person ? person.description || '':'',
    category:person ? person.category || '':'',
    price:person ? person.price || '':''
  })
  function valueAdd(){
    console.log(form)
  }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <Box style={{marginTop:'5%'}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:'black'}}>ADD YOUR NEW PRODUCT HERE</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          name="title"
          value={form.title}
          onChange={valueCap}
        />
        </div><div>
        <TextField
           required
           id="outlined-required"
           label="Product Description"
           name="description"
           value={form.description}
           onChange={valueCap}
        /></div><div>
        <TextField
           required
           id="outlined-required"
           label="Product Category"
           name="category"
           value={form.category}
           onChange={valueCap}
        />
        </div><div>
          <TextField
          required
          id="outlined-number-input"
          label="Product Price"
          type="number"
          name="price"
          value={form.price}
          onChange={valueCap}
          />

        </div><div>
        <Button  onClick={valueAdd} style={{backgroundColor:'black',color:'white',marginTop:'2%'}}>Add Movie</Button>
        </div>
        </Box>
  )
}

export default Add