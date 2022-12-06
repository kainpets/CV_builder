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
    experience: "",
    experienceStart: "",
    experienceEnd: "",
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

  function handleAutoGenerate(e) {
    e.preventDefault();
    setValues({
    firstName: "Richard",
    lastName: "Sienkowsky",
    email: "richard@sienkowsky@doggo.com",
    phone: "600600600",
    city: "Dog Ville",
    university: "Woof University",
    degree: "Dog 101",
    educationStart: "2017",
    educationEnd: "2022",
    experience: "I've been a dog since birth. Being a dog gave me great opportunities for pets and treats. During my work there I've learnt how to get pets from everyone and make evryone happy!",
    experienceStart: "2018",
    experienceEnd: "2022",
    })
    setPhoto("../src/assets/ryszard.jpg")
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
      experience: "",
      experienceStart: "",
      experienceEnd: "",
    });
    setPhoto();
  }

  return (
    <>
      <Form
        values={values}
        onValuesChange={onValuesChange}
        onPhotoChange={onPhotoChange}
        handleResetClick={handleResetClick}
        handleAutoGenerate={handleAutoGenerate}
      />
      <Result values={values} photoUrl={photo} />
    </>
  );
}

export default App;
