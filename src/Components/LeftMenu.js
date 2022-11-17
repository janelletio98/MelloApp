import React from 'react'
import "../Styles/LeftMenu.css"

//import top left logo from react icons
import { BsLightningCharge, BsThreeDots } from "react-icons/bs";

function LeftMenu() {
  return <div className = 'leftMenu'> 
<div className="logoMelloAmpContainer">
  <i>
    <BsLightningCharge />
    </i>
    </div>

<div className='logoContainer'>
  <h2> MelloAmp </h2>
  <i>
    <BsThreeDots />
    </i>

</div>
<div className="searchBox"></div>
</div>;  
}




export {LeftMenu};