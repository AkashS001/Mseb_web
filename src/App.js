import React from "react";
import './App.css';
import { Typography, Card, CardContent, Grid, TextField,Select,MenuItem, Button, InputLabel, FormControl } from "@mui/material";
function App() {
  
  return (
    <div className="App">
     <Typography gutterBottom variant="h3" align="center">
        Consumer Profile


      </Typography>

      <Card style={{maxWidth:"500",margin:"0 auto",padding:"40px 5px"}}>
        <CardContent>
        <form>
        {/*<Typography gutterBottom variant="h5">Contact Us</Typography>*/}
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} item  >
              <TextField label="Consumer Number"  type="number"placeholder="Enter Consumer Number"  name="consumer_num"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={10}  sm={6} item>
              <TextField label="Consumer Name" placeholder="Enter Consumer Name" name="consumer_name"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField label="Address" placeholder="Enter Consumer Address" name="address" varient="outlined" multiline rows={4} fullWidth required />
            </Grid>

            

            <Grid xs={12}  sm={6}item>
              <TextField label="Name Of Owner" placeholder="Enter Owner Name" name="owner_app" varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={8 } sm={6} item>
              <TextField type="number" label="Mobile Number Of Owner" placeholder="Enter Owner Mobile Number" name="mob_num_owner" varient="outlined" fullWidth  />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField type="number" label=" Mobile Number Of User" placeholder="Enter User Mobile Number" name="mob_num-user"varient="outlined" fullWidth  />
            </Grid>


            <Grid xs={12}  sm={6} item>
              <TextField label="Category/Tariff" placeholder="Enter Category/Tariff" name="cat"varient="outlined" fullWidth required />
            </Grid>
            
            <Grid xs={12} sm={6}item>
              <TextField label="Actual Type of Installation" placeholder="Enter Installation Type" name="tariff"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField label="Tariff Applicable" placeholder="Enter Tariff Applicable as per actual useage" name="tariff_app"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12}  sm={6}item>
              <TextField label="Sanctioned Load" placeholder="Enter Sanctioned Load as per bill" name="san_load"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField label="Connected Load" placeholder="Enter Connected Load as per bill" name="conn_load"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12}  sm={6}item>
              <TextField label="Normal Working Hrs" placeholder="Enter Normal Working Hrs" name="normal_working"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12}  sm={6}item>
              <TextField label="Name of Billing Office" placeholder="Enter Billing Office Name" name="name_of_billing"varient="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} sm={6}item>
              <TextField label="Arrears As On Date" placeholder="Enter Arrears as On Date" name="arrears_date"varient="outlined" fullWidth  />
            </Grid>

             <Grid xs={12} sm={6}item>
             <TextField label="Is Billing abnormally Observed" placeholder="Enter Owner Name" Name="billing"varient="outlined" fullWidth required />
            </Grid> 
                 

            <Grid xs={12} sm={6}item>
              <TextField label="Meter Number Mismatch" placeholder="Enter Meter Number Mismatch" name="meter_number"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Difference In Tariff" placeholder="Enter difference in Tariff"  name="differ_tariff" varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Exceeding Demand" placeholder="Enter Exceeding Demand" name="exceed_tariff" varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Abnormal Reading" placeholder="Enter Abnormal Reading" name="abnormal_reading"varient="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6}item>
              <TextField label="Billing with Abnormal Status" placeholder="Enter Abnormal Status" name="billing_abnor_stat"varient="outlined" fullWidth required />
            </Grid>



            <Grid xs={12} item>
              <Button type="submit" varient="contained" color="primary" fullWidth>Submit</Button>
            </Grid>

          </Grid>
          </form>
        </CardContent>

      </Card>
    </div>
  );
}

export default App;
