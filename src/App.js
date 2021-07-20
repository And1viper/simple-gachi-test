import FormName from "./components/FormName"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Response from "./components/Response"
import MasterListOld from "./components/MasterListOld"
import Gachi from "./gachimuchi.jpg"

import { useState } from "react"


function App() {
  const [name, setName] = useState('');
  const [nameLength, setNameLength] = useState('');

  const addName = (name) => {
    setName(name.text);
    setNameLength(name.text.length);
  }
  
  const masterList = ['And1viper', 'Aestian', 'Rokan', 'shNuk3', 'RinRi', '120'];

  return (
    <div className="container">
      <img alt="gachi" src={Gachi} style={{ maxWidth: '100%', maxHeight: '400px'}}/>
      <Header title = '"You are Slave or Master" test'/>
      <FormName onAdd={addName}/>
      <MasterListOld/>
      <Response name = {name} nameLenght = {nameLength} masterList = {masterList}/>
      <Footer />
    </div>
  );
}

export default App;
