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

  const [photo, setPhoto] = useState();

  function onValuesChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function onPhotoChange(e) {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    console.log(photo);
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
    setPhoto()
  }

  return (
    <>
      <Form 
      values={values}
      onValuesChange={onValuesChange}
      onPhotoChange={onPhotoChange}
      handleSubmit={handleSubmit}
      handleResetClick={handleResetClick}
      />
      <Result 
      values={values}
      photoUrl={photo}
      />
    </>
  );
}

export default App;
