import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Form({
  values,
  onValuesChange,
  handleResetClick,
  onPhotoChange
}) {
  return (
    <>
      <Box
        component="form"
        sx={{
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" sx={{
          "width": "auto",
        }}>Personal Information </Typography>
        <TextField
          id="first-name"
          label="First Name"
          variant="standard"
          name="firstName"
          value={values.firstName}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="last-name"
          label="Last Name"
          variant="standard"
          name="lastName"
          value={values.lastName}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          name="email"
          value={values.email}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="standard"
          name="phone"
          value={values.phone}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          id="city"
          label="City"
          variant="standard"
          name="city"
          value={values.city}
          onChange={onValuesChange}
        />
        <br />
        <Button variant="contained" component="label" >
          Upload Photo
          <input hidden accept="image/*" multiple type="file" onChange={onPhotoChange} />
        </Button>
        <br />
        <Typography variant="h5">Education Information </Typography>
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
        <Button variant="contained" type="reset" onClick={handleResetClick}>
          Reset
        </Button>
        <br />
      </Box>
    </>
  );
}
