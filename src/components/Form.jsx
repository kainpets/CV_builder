import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Form() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="first-name" label="First Name" variant="standard" />
        <br />
        <TextField id="last-name" label="Last Name" variant="standard" />
        <br />
        <TextField id="email" label="Email" variant="standard" />
        <br />
        <TextField id="phone-number" label="Phone Number" variant="standard" />
        <br />
        <TextField id="city" label="City" variant="standard" />
        <br />
        <TextField id="photo" variant="standard" type="file" />
        <br />
      </Box>
    </>
  );
}
