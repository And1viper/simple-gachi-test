import Response from "../components/Response"
import MasterListOld from "../components/MasterListOld"
import FormName from "../components/FormName"
import { masterList } from "../components/Masters"

import { useState } from "react"

const List = () => {
  const [name, setName] = useState('');
  const [nameLength, setNameLength] = useState('');

  const addName = (name) => {
    setName(name.text);
    setNameLength(name.text.length);
  }
  
//   const masterList = ['And1viper', 'Aestian', 'Rokan', 'shNuk3', 'RinRi', '120', 'Margulan', 'Dulkinsar'];

  return (
    <div>
      <FormName onAdd={addName}/>
      <MasterListOld/>
      <Response name = {name} nameLenght = {nameLength} masterList = {masterList}/>
    </div>
  )
}

export default List