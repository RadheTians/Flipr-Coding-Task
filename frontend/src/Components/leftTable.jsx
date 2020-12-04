import React from 'react';
import destination from '../Assets/destination.svg';
import home from '../Assets/warehouse.svg'

import Delivery from './delivery';


function LeftTable(props) {

    console.log(props.data)
    return (
        <div className="shadow-sm">
            <img src={destination} width="35" height="35" className="rounded-circle img-background" alt="" loading="lazy"/>
             
            <div className="container">
                <div className="line"></div>
                <Delivery data="zero"/>
                <Delivery data="one"/>
                <Delivery data="one"/>
                <Delivery data="one"/>
                <Delivery data="one"/>
  
            </div>
            <img src={home} width="35" height="35"  className="rounded-circle img-background" alt="" loading="lazy"/>
        </div> 
    );
}

export default LeftTable;