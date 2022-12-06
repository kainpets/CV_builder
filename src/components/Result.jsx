import { useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReactToPrint from "react-to-print";
import Button from "@mui/material/Button";

export default function Result({ values, photoUrl }) {
  const componentRef = useRef();

  function createData(
    fName,
    lName,
    email,
    phoneNumber,
    city,
    university,
    degree,
    studiesStart,
    studiesEnd,
    experience,
    experienceStart,
    experienceEnd
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
      experience,
      experienceStart,
      experienceEnd,
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
    createData("Your Previous Experience", values.experience),
    createData("Year You Began Work", values.experienceStart),
    createData("Year You Ended Work", values.experienceEnd),
  ];

  return (
    <>
      <Box ref={componentRef}>
        <Box class="result-header">
          <Box>
            <Typography variant="h4">{values.firstName}</Typography>
            <Typography variant="h4">{values.lastName}</Typography>
            <Typography variant="h6">{values.email}</Typography>
          </Box>
          {photoUrl && (
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 250, md: 167 },
                maxWidth: { xs: 287, md: 250 },
              }}
              alt="CV photo"
              src={photoUrl}
            />
          )}
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
                  <TableCell>{row.lName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <ReactToPrint
        trigger={() => <Button variant="contained">Print</Button>}
        content={() => componentRef.current}
      ></ReactToPrint>
    </>
  );
}
