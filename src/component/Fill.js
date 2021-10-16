import React,{useState} from 'react';
import Apollo from "./Apollo"

const fill = (props) => {
  const inputId=(e)=>{
    props.setId(e.target.value)
  }
  const inputKelamin=(e)=>{
    props.setKelamin(e.target.value)
  }
  

if (props.nameFill==="Id") {
  return (
    <div>
    		<input onChange={inputId}   type="text"/>
        <button onClick={props.getDataId}>Get Data By Id</button>
    </div>
  )
  }

  if(props.nameFill==="Kelamin") {
  return (
    <div className="kelamin">
       <select  onChange={inputKelamin}  name="gender" id="gender">
                    <option selected disabled value="ID">Gender</option>
                    <option value="pria">Pria</option>
                  <option value="wanita">Wanita</option>
                </select>
        <button onClick={props.GetDataKelamin}>Get Data By Gender</button>
    </div>
  )
  }
}

export default fill;