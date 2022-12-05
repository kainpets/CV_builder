import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Form({values, onValuesChange, handleSubmit}) {
  

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
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="last-name"
          label="Last Name"
          variant="standard"
          name="lastName"
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          name="email"
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="standard"
          name="phone"
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="city"
          label="City"
          variant="standard"
          name="city"
          onChange={onValuesChange}
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
          value={values.university}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="degree"
          label="Degree"
          variant="standard"
          name="degree"
          value={values.degree}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="education-start"
          label="Year You Begun Studies"
          variant="standard"
          name="educationStart"
          value={values.educationStart}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="education-end"
          label="Year You Ended Studies"
          variant="standard"
          name="educationEnd"
          value={values.educationEnd}
          onChange={onValuesChange}
        />
        <br />
        <Button variant="contained" type="submit">
          Submit Your Info
        </Button>
      </Box>
    </>
  );
}
