import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import DashBar from '../components/DashBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const drawerWidth = 240;






export default function Dashboard() {

  return (
    <>
      <div className="products" >
                  
               
        <DashBar/>
        <Box height={70}/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} >
            <Grid item xs={8}>
            <Stack spacing = {2} direction="column">
                <Card sx={{ maxWidth: 300 }}>
                    
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Your Products
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Redgear Wireless Controller
                      </Typography>
                    </CardContent>
                    
                </Card>

                <Card sx={{ maxWidth: 300 }}>
                    
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    
                </Card>
            </Stack>

            </Grid>


           

            
          
         </Grid>

         <div class="container items-center "  style={{marginTop: '10%'}}>

                    <a href="#" class="button type--B ">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <span class="button__text">BUY</span>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </a>
                        <a href="#" class="button type--B">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <span class="button__text">SELL</span>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </a>
                  
                        <a href="#" class="button type--B">
                        <div class="button__line"></div>
                        <div class="button__line"></div>
                        <span class="button__text">EDIT BID</span>
                        <div class="button__drow1"></div>
                        <div class="button__drow2"></div>
                    </a>

          </div>
        </Box> 









        
        

        
      </div>
      
    
    </>
    
  );
}
