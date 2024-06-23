import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: null,
    gender: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormValues({
      ...formValues,
      dateOfBirth: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formValues);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 justify-center">Sign Up</h2>
        <div className="mb-4">
          <TextField
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={formValues.dateOfBirth}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth variant="outlined" margin="normal" />}
            />
          </LocalizationProvider> */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              name="gender"
              value={formValues.gender}
              onChange={handleInputChange}
              label="Gender"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
