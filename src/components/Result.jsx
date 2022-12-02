export default function Result(props) {
  console.log(props.values);

  const { university, degree, educationStart, educationEnd } = props.values;

  return (
    <>
      <ul>
        <h1>Renders</h1>
      </ul>
    </>
  );
}
