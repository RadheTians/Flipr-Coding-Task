import React from 'react';
import moment from 'moment';

function Delivery(props) {

    const data = props.data;
    if(data.status_detail==="DELIVERED"){
        return (
            <>
            <div className="hr-line"/> 
            <div class="border delivery-zero">
                <div className="delivery-zero-status">{data.location}</div> 
                <div className="delivery-zero-date">{moment.utc(data.time).local().format("DD-MM-YYYY HH:mm")}</div> 
            </div>
            </>
        );
    } else {
        return (
            <>
            <div className="hr-line"/>
            <div class="border delivery-one">
                <div className="delivery-one-status">{data.location}</div> 
                <div className="delivery-one-date">{moment.utc(data.time).local().format("DD-MM-YYYY HH:mm")}</div> 
            </div>
            </>
        );
    }
    
}

export default Delivery;