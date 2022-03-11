import billTo from './billTo'
import shipTo from './shipTo'
import React, { useState, useEffect } from 'react';
import './App.scss'
const Middle=()=>{
    const [bill,setBill]=useState(billTo[0])
    const [ship,setShip]=useState(shipTo[0])
    return(
        
    <div>
        <div className='container-1'>
            <div className='child4'>
            <h2 className='headbill'>BILL TO</h2>
            <p>[{bill.recipientname}]</p>
            <p>[{bill.companyname}]</p>
            <p>[{bill.streetaddress}]</p>
            <p>[{bill.city,billTo.state,billTo.zipcode}]</p>
            <p>[{bill.phone}]</p>
            </div>
            
            

         <div className='child5'>
            <h2 className='headship'>SHIP TO</h2>
            <p>[{ship.recipientname}]</p>
            <p>[{ship.companyname}]</p>
            <p>[{ship.streetaddress}]</p>
            <p>[{ship.city,shipTo.state,shipTo.zipcode}]</p>
            <p>[{ship.phone}]</p>
            </div>
            <div className='child6'></div>
            </div>

           
            

        </div>
    )
}
export default Middle;