import { useState } from "react";
import Form from "./components/Form.jsx";
import Result from "./components/Result";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    university: "",
    degree: "",
    educationStart: "",
    educationEnd: "",
  });

  function onValuesChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }


  return (
    <>
      <Form 
      values={values}
      onValuesChange={onValuesChange}
      handleSubmit={handleSubmit}
      />
      <Result />
    </>
  );
}

export default App;
