import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const Todoapp = () => {
  return (
    <div className="container">
     <div className="background">
       <h3 className="heading">Todo-Application</h3>
       <div className="input-field">
        <InputText style={{margin:"10px"}} />
        <Button label="Add" style={{margin:"10px"}} />
       </div>
     </div>
    </div>
  )
}

export default Todoapp;