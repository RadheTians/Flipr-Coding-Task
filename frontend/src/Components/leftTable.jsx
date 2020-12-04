import React from 'react';
import destination from '../Assets/destination.svg';
import home from '../Assets/warehouse.svg'

import Delivery from './delivery';

function LeftTable(props) {

    return (
        <div className="shadow-sm">
            <img src={destination} width="30" height="30" class="rounded-circle" alt="" loading="lazy"/>
            
            <div class="container">
                <div class="line"></div>
                <Delivery data="zero"/>
                <Delivery data="one"/>
                <Delivery data="one"/>
                <Delivery data="one"/>
                <Delivery data="one"/>
  
            </div>
            <img src={home} width="30" height="30" class="rounded-circle" alt="" loading="lazy"/>
        </div>
    );
}

export default LeftTable;