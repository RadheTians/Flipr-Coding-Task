import React from 'react';
import moment from 'moment';

function Delivery(props) {

    const data = props.data;
    if(data.status_detail==="DELIVERED"){
        return (
            <>
            <div className="hr-line"/> 
            <div class="border delivery-zero">
                <pre className="delivery-text"> {data.status_detail}    {moment.utc(data.time).local().format("DD-MM-YYYY HH:mm")}</pre>
            </div>
            </>
        );
    } else {
        return (
            <>
            <div className="hr-line"/>
            <div class="border delivery-one">
               <pre className="delivery-text"> {data.status_detail}     {moment.utc(data.time).local().format("DD-MM-YYYY HH:mm")}</pre>
            </div>
            </>
        );
    }
    
}

export default Delivery;