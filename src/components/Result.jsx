import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Result({values}) {

  const arrayOfValues = Object.values(values)
  console.log(arrayOfValues);

  return (
    <>
      {arrayOfValues.map((value, index) => {
        return <Typography key={index}>{value}</Typography>
      })
        }
    </>
  );
}
