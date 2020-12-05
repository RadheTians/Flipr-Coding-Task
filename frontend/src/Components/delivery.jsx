import React from 'react';

function Delivery(props) {

    const data = props.data;
    if(data.status_detail==="DELIVERED"){
        return (
            <div class="row delivery-zero">
                <div class="col">
                    <p className="delivery-text">{data.status_detail}</p>
                </div>
                <div class="col">
                    <p className="delivery-text">{data.time}</p>
                </div>
        </div>
        );
    } else {
        return (
            <div class="row border delivery-one">
                <div class="col">
                    <p className="delivery-text">{data.status_detail}</p>
                </div>
                <div class="col">
                    <p className="delivery-text">{data.time}</p>
                </div>
        </div>
        );
    }
    
}

export default Delivery;