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

  function handleResetClick(e) {
    e.preventDefault();
    setValues({
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
  }

  return (
    <>
      <Form 
      values={values}
      onValuesChange={onValuesChange}
      handleSubmit={handleSubmit}
      handleResetClick={handleResetClick}
      />
      <Result values={values}/>
    </>
  );
}

export default App;
