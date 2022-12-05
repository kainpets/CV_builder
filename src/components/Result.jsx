import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Result({ values, photoUrl }) {
  console.log(values);

  function createData(
    fName,
    lName,
    email,
    phoneNumber,
    city,
    university,
    degree,
    studiesStart,
    studiesEnd
  ) {
    return {
      fName,
      lName,
      email,
      phoneNumber,
      city,
      university,
      degree,
      studiesStart,
      studiesEnd,
    };
  }

  const rows = [
    createData("First Name", values.firstName),
    createData("Last Name", values.lastName),
    createData("Email", values.email),
    createData("Phone Number", values.phone),
    createData("City", values.city),
    createData("University", values.university),
    createData("Degree", values.degree),
    createData("Year Studies Begun", values.educationStart),
    createData("Year Studies Ended", values.educationEnd),
  ];

  return (
    <>
      <Box class="result-header">
<Box>
        <Typography variant="h4">{values.firstName}</Typography>
        <Typography variant="h4">{values.lastName}</Typography>
        <Typography variant="h6">{values.email}</Typography>
        </Box>
        {photoUrl && <Box
        component="img"
        sx={{
          maxHeight: { xs: 250, md: 167 },
          maxWidth: { xs: 287, md: 250 },
        }}
        alt="CV photo"
        src={photoUrl}
      />}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.fName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fName}
                </TableCell>
                <TableCell align="right">{row.lName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
