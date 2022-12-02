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
  });

  const [educationValues, setEducationValues] = useState({
    university: "",
    degree: "",
    educationStart: "",
    educationEnd: "",
  });

  const [addMoreEducation, setaddMoreEducation] = useState(false);

  function handlePersonalClick(e) {
    e.preventDefault();
    console.log(personalValues);
  }

  function handleEducationClick(e) {
    e.preventDefault();
    setaddMoreEducation(true);
  }

  function handlePersonalChange(e) {
    setPersonalValues({
      ...personalValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleEducationChange(e) {
    setEducationValues({
      ...educationValues,
      [e.target.name]: e.target.value,
    });
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
        <Button variant="contained" type="click" onClick={handlePersonalClick}>
          Submit Personal Info
        </Button>
        <Typography variant="h4">Education Information </Typography>
        <TextField
          id="university"
          label="University"
          variant="standard"
          name="university"
          onChange={handleEducationChange}
        />
        <br />
        <TextField
          id="degree"
          label="Degree"
          variant="standard"
          name="degree"
          onChange={handleEducationChange}
        />
        <br />
        <TextField
          id="education-start"
          label="Year You Begun Studies"
          variant="standard"
          name="educationStart"
          onChange={handleEducationChange}
        />
        <br />
        <TextField
          id="education-end"
          label="Year You Ended Studies"
          variant="standard"
          name="educationEnd"
          onChange={handleEducationChange}
        />
        <br />
        <Button variant="contained" type="click" onClick={handleEducationClick}>
          Submit Education Info
        </Button>
        {/* TODO add more education info if users wants to */}
        {addMoreEducation && <Button variant="contained" type="click" >
          Add More Education Info
        </Button>}
        {/* TODO render education part of the form and set a clean slate */}
        {addMoreEducation && <Result values={educationValues}></Result>}
      </Box>
    </>
  );
}
