import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
const Dash = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios.get(' https://fakestoreapi.com/products')
          .then((res) => {
            setRows(res.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <Grid  container spacing={3} justifyContent="center">
      {rows.map((row) => (
        <Grid  style={{marginTop:"3%"}} item key={row.id} xs={12} sm={6} md={3} lg={3}>
          <Card style={{borderBlock:"4px solid red",borderLeft:"4px solid red ",borderRight:"4px solid  red "}}  sx={{backgroundColor:'black',height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent  sx={{ flexGrow: 1 }}>
              <Typography style={{color:'white'}} gutterBottom variant="h5" component="div">
                {row.title}
              </Typography>
              <Typography style={{color:'white'}} variant="body2" color="text.secondary">
                Category: {row.category}
              </Typography>
              <Typography style={{color:'white'}} variant="body2" color="text.secondary">
                Image: {row.image}
              </Typography>
              <Typography style={{color:'white'}} variant="body2" color="text.secondary">
                Price: {row.price}
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Dash
