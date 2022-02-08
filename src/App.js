import "./App.css";
import Form from "./Components/Form/Form";
import Filter from "./Components/Filter/Filter";
import Contacts from "./Components/Contacts/Contacts";
import { useEffect } from "react";


const App = () => {


  // useEffect(() => {
  //     fetch(`https://6201333efdf50900172498d3.mockapi.io/contacts`)
  //     .then(res => res.json())
  //       .then(data => {
  //       console.log(data);
  //     return data
  //   });
  // }, []);

  return (
    <div className="App">
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
};

export default App;
