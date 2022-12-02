import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Form() {
  const [personalValues, setPersonalValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(personalValues);
  }

  function handleChange(e) {
    setPersonalValues({ ...personalValues, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">Personal Information </Typography>
        <TextField
          id="first-name"
          label="First Name"
          variant="standard"
          name="firstName"
          value={personalValues.firstName}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="last-name"
          label="Last Name"
          variant="standard"
          name="lastName"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="standard"
          name="phone"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="city"
          label="City"
          variant="standard"
          name="city"
          onChange={handleChange}
        />
        <br />
        <TextField id="photo" variant="standard" type="file" name="photo" />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
}
