import { useState } from "react";
import FormComponent from "./Components/FormComponent";
import EnteredData from "./Components/EnteredData";


function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    veganMeal: false,
  });

  const onChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    });
  }

  const onCheck = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.checked,
      }
    });
  }


  return (
    <div>
      <header>
        <h1>Sample form</h1>
      </header>
      <FormComponent 
        formData={formData}
        onChange={onChange}
        onCheck={onCheck}
      />
      <hr></hr>
      <EnteredData 
        formData={formData}
      />
    </div>
  );
}

export default App;
