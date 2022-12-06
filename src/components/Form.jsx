import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Form({
  values,
  onValuesChange,
  handleResetClick,
  onPhotoChange,
  handleAutoGenerate,
}) {
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="on"
      >
        <Typography variant="h1" id="title">
          Resume Generator
        </Typography>
        <Typography variant="h5">Personal Information </Typography>
        <TextField
          sx={{
            width: "40ch",
          }}
          id="first-name"
          label="First Name"
          variant="standard"
          name="firstName"
          value={values.firstName}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="last-name"
          label="Last Name"
          variant="standard"
          name="lastName"
          value={values.lastName}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="email"
          label="Email"
          variant="standard"
          name="email"
          value={values.email}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="phone-number"
          label="Phone Number"
          variant="standard"
          name="phone"
          value={values.phone}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="city"
          label="City"
          variant="standard"
          name="city"
          value={values.city}
          onChange={onValuesChange}
        />
        <br />
        <Button variant="contained" component="label">
          Upload Photo
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={onPhotoChange}
          />
        </Button>
        <br />
        <Typography variant="h5">Education Information </Typography>
        <TextField
          sx={{
            width: "40ch",
          }}
          id="university"
          label="University"
          variant="standard"
          name="university"
          value={values.university}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="degree"
          label="Degree"
          variant="standard"
          name="degree"
          value={values.degree}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="education-start"
          label="Year You Begun Studies"
          variant="standard"
          name="educationStart"
          value={values.educationStart}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="education-end"
          label="Year You Ended Studies"
          variant="standard"
          name="educationEnd"
          value={values.educationEnd}
          onChange={onValuesChange}
        />
        <br />
        <Typography variant="h5">Experience Information </Typography>
        <TextField
          sx={{
            width: "40ch",
          }}
          id="experience"
          multiline
          label="Describe Your Previous Experience"
          variant="standard"
          name="experience"
          value={values.experience}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="experience-start"
          label="Year You Started Your Job"
          variant="standard"
          name="experienceStart"
          value={values.experienceStart}
          onChange={onValuesChange}
        />
        <br />
        <TextField
          sx={{
            width: "40ch",
          }}
          id="experience-end"
          label="Year You Ended"
          variant="standard"
          name="experienceEnd"
          value={values.experienceEnd}
          onChange={onValuesChange}
        />
        <br />
        <Button variant="contained" type="reset" onClick={handleResetClick}>
          Reset
        </Button>
        <br />
        <Button variant="contained" onClick={handleAutoGenerate}>
          Auto Generate
        </Button>
        <br />
      </Box>
    </>
  );
}
