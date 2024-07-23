import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import './todoapp.css';
const Todoapp = () => {
  return (
    <div className="container1">
      <div className="Tile1">
        <h6>Web development</h6>
      </div>
      <div style={{width:"8px"}}></div>
      <div className="Tile1">
        <h6>Programing</h6>
      </div>
      <div style={{width:"8px"}}></div>
      <div className="Tile1">
        <h6>Communication Skills</h6>
      </div>
      <div style={{width:"8px"}}></div>
      <div className="Tile1">
        <h6>Intiview Preparation</h6>
      </div>
      <div style={{width:"8px"}}></div>
      <div className="Tile1">
        <h6>Resume</h6>
      </div>
     </div>
  )
}

export default Todoapp;