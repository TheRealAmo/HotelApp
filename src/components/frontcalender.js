import React from "react";
import "./Banner.css"
import { Component } from "react";

function frontcalender () {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    fontFamily: "Sans-Serif",
    width: "850px",
    display:"flex",
    justifyContent: "center",
    margin: "auto",
    borderRadius:"30px",
    border:"none",
  };
  return(
<div id="row2" style={myStyle}>
    <div className="d-grid gap-3">
     <label aria-label="Check-in">
      
     <input type="date" className="customfeild" placeholder=""/></label>
    <label aria-label="Check-out">
      <input type="date" className="customfeild"/></label>

<label >
  
  <select className="customfeild">
  
  <option >1 room / 3 Guests</option>
  <option>1</option> <option>1</option> <option>1</option>
</select></label>

     </div>
</div>
  )
}

export default frontcalender;