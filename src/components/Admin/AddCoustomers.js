// import React from 'react'

// const AddCoustomers = () => {
//   return (
// <>
// <form className=' form-addcoustomer m-5 p-5'>
// <div className="mb-3 ">
//     <label for="fname" className="form-label">First Name</label>
//     <input type="text" className="form-control" />
//     <div className="mb-3 ">
//     <label for="lname" className="form-label">Last Name</label>
//     <input type="text" className="form-control" />
    
//   </div>
//   </div>
//   <div className="mb-3 ">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
//   </div>
//   <div className="mb-3 ">
//     <label for="number" className="form-label">Phone Number</label>
//     <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Old Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword2" className="form-label">New Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword3" className="form-label">Confirm Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
 
//   <button type="submit" class="btn btn-primary">Submit</button>

//   </form>
// </>  )
// }

// export default AddCoustomers


import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const AddCoustomers = () => {
  return (<>
   <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  </>
  )
}

export default AddCoustomers