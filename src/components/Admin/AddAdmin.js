import React, { useEffect, useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import useStyles from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

toast.configure();
export default function AddMerchant() {
  var classes = useStyles();
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registartion_number, setRegistartion_number] = useState("")
  const [company_name, setCompany_name] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [phone_number, setPhone_number] = useState("")










  // Add Merchants Api
  const AddAdmin = async (res) => {

  }
  return (
    <div style={{ margin: '10px' }}>
      <h1 className='heading-add-parking'>Add Parking</h1>
      <Paper>
        <Box px={3} py={2}>
          <Grid container spacing={4}>

            <Grid item md={12} xs={12} sm={6}>
              <TextField
                required

                id="name"
                name="name"
                label="Parking Name"
                variant='outlined'
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item md={12} xs={12} sm={6}>
              <select class="form-select" style={{ padding: '12px', height: '45px', fontSize: '16px', color: '#4A4A4A', border: '1px solid #c4c4c4', borderRadius: '5px' }} aria-label="Default select example">
                <option selected>Select Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Grid>
            <Grid item md={12} xs={12} sm={6}>
              <TextField
                required
                value={registartion_number}
                id="capacity"
                name="capacity"
                label="Capacity"
                variant='outlined'
                fullWidth
                margin="dense"
                onChange={(e) => setRegistartion_number(e.target.value)}
              />
            </Grid>
            <Grid item md={12} xs={12} sm={6}>
              <div className="days">
                <label htmlFor="">No. of days :</label>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Sun" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Mon" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Tus" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Wed" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Thu" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Fri" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Sat" />
                </FormGroup>
              </div>

            </Grid>
            <Grid item md={12} xs={12} sm={6}>
              <div className="days">

                <label >Vechiel Type :</label>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Two Wheeler" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Four Wheeler" />
                </FormGroup>
              </div>
            </Grid>

            <Grid item md={12} xs={12} sm={6}>

              <TextField
                required
                id="location"
                name="location"
                label="Amount of Two Wheeler"
                variant='outlined'
                fullWidth
                margin="dense"
              />
              <TextField
                required
                id="location"
                name="location"
                label="Amount of Four Wheeler"
                variant='outlined'
                fullWidth
                margin="dense"
              />

            </Grid>






          </Grid>
          <Box mt={3}>
            {isLoading ? (
              <CircularProgress size={26} className={classes.loginLoader} />
            ) : (
              <Button
                variant="contained"
                size="large"
                onClick={AddAdmin}
              >
                Submit
              </Button>
            )}
          </Box>

        </Box>

      </Paper>
    </div>
  );
}
