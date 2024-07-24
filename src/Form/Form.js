import React from "react";
import "./Form.css";
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
const Form = () => {
  return (
    <div className="container">
      <div className="Login Form">
        <h3>Login Form</h3>
      </div>
      <div className="flex flex-column gap-2 mb-2">
        <label htmlFor="username" className=" ml-3 user-label">Username</label>
        <InputText className="w-25" />
      </div>
      <div className="flex flex-column gap-2 mb-2">
        <label htmlFor="Mail Id" className="user-label">Maii Id</label>
        <InputText  className="w-25" />
      </div>
      <div className="flex flex-column gap-2 mb-2">
        <label htmlFor="Mobile Number" className="user-label">Mobile Number</label>
        <InputText  className="w-25" />
      </div>
      <div className="flex flex-column gap-2 mb-2">
        <label htmlFor="Passedout" className="user-label">Passedout</label>
        <InputText  className="w-25" />
      </div>
      <div className="flex flex-column gap-2 mb-2">
        <label htmlFor="Skills" className="user-label">Skills</label>
        <InputText  className="w-25" />
      </div>
      <div className="button gap-2">
      <Button label="Submit" className="btn"/>
      <Button label="Cancel" className="btn" />
      </div>
    </div>
  );
};

export default Form;
