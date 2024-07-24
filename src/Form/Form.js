import React from "react";
import "./Form.css";
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
const Form = () => {
  return (
    <div className="container" style={{display:"flex",justifyItems:"center"}}>
    <div className="container1">

      <div className="inputcontainer">
        <div>
        <label htmlFor="username" className=" ml-3 user-label">Username</label>
        <InputText />
        </div>
      </div>
      <div className="inputcontainer">
        <div>
        <label htmlFor="Mail Id" className="user-label">Maii Id</label>
        <InputText />
        </div>
      </div>
      <div className="inputcontainer">
        <div>
        <label htmlFor="Mobile Number" className="user-label">Mobile Number</label>
        <InputText />
        </div>
      </div>
      <div className="inputcontainer">
        <div>
        <label htmlFor="Passedout" className="user-label">Passedout</label>
        <InputText />
        </div>
      </div>
      <div className="inputcontainer">
        <div>
        <label htmlFor="Skills" className="user-label">Skills</label>
        <InputText />
        </div>
      </div>
      <div className="button gap-2">
      <Button label="Submit" className="btn"/>
      <Button label="Cancel" className="btn" />
      </div>
    </div>
    </div>
  );
};

export default Form;
