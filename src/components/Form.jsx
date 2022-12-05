import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Result from "./Result";

export default function Form() {
  const [personalValues, setPersonalValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    university: "",
    degree: "",
    educationStart: "",
    educationEnd: "",
  });

  function handlePersonalClick(e) {
    e.preventDefault();
    console.log(personalValues);
  }

  function handlePersonalChange(e) {
    setPersonalValues({
      ...personalValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(personalValues);
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
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="last-name"
          label="Last Name"
          variant="standard"
          name="lastName"
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          name="email"
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="standard"
          name="phone"
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="city"
          label="City"
          variant="standard"
          name="city"
          onChange={handlePersonalChange}
        />
        <br />
        <TextField id="photo" variant="standard" type="file" name="photo" />
        <br />
        <Typography variant="h4">Education Information </Typography>
        <TextField
          id="university"
          label="University"
          variant="standard"
          name="university"
          value={personalValues.university}
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="degree"
          label="Degree"
          variant="standard"
          name="degree"
          value={personalValues.degree}
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="education-start"
          label="Year You Begun Studies"
          variant="standard"
          name="educationStart"
          value={personalValues.educationStart}
          onChange={handlePersonalChange}
        />
        <br />
        <TextField
          id="education-end"
          label="Year You Ended Studies"
          variant="standard"
          name="educationEnd"
          value={personalValues.educationEnd}
          onChange={handlePersonalChange}
        />
        <br />
        <Button variant="contained" type="submit">
          Submit Your Info
        </Button>
      </Box>
    </>
  );
}
