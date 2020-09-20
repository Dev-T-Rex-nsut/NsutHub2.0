import React from "react"
import Notavailable from "../img/notavailable.png"
import Footer from "./footer"

export const NotAvailable = () => {
   return (
       <div style={{alignItems: "center"}} className="moveRt">
           <img src = {Notavailable} style={{marginLeft: "30%", marginTop: "5%", padding: "5%",  height: "25%", width: "45%"}}/>
           <Footer/> 
       </div>
   );
}