export default function Result(props) {

  const educationValues = Object.entries(props.values);

  console.log(educationValues);
  return (
    <>
      <ul>
        <h1>Renders</h1>
        {educationValues.map(value => {
          return <li key="value">{value}</li>
        })}
      </ul>
    </>
  );
}
