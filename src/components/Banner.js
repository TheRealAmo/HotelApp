import { Component } from "react";
import image from './zimbali.png';
import React from "react";
import Button from 'react-bootstrap/Button';
import "./Banner.css"




function Banner () {
  
    
  const myBanner = {height:'50%', 
    width:"",
    display:"flex",
    justifyContent:"center",
    margin:"auto",
    color:"rgb(87, 87, 87)",
  };

  return (
    <div class=''>


        <div class="row"  style={myBanner}>
            <div class="col-md-4">

                <h3>KIMBALLIN HOTEL AND RESORT</h3>

                <p>Come experience what luxury feels like at Kimbasllin, the best 
                    acommodatiom in kimberley.Who knows you might
                     fall in love with our way of doing things.
                     Besides thats one place best known to have 
                     the most fun around here</p>

            </div>
            
            <div class="col-md-6 text-center">
                <img src={image} class="img-fluid" alt=""  style={{height:'100%', width:"100%", display:'flex', justifycontent:'center'}}/>
            </div>
        </div>

  <div>
    
  </div>

 </div>



   
  );
}

export default Banner;