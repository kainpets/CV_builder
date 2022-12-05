export default function Result(props) {

  const educationValues = Object.entries(props.values);

  console.log(educationValues);
  return (
    <>
      <ul>
        {educationValues.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  );
}
