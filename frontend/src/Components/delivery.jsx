import React from 'react';

function Delivery(props) {

    if(props.data=="zero"){
        return (
            <div class="row delivery-zero">
                <div class="col-6">
                    <p className="delivery-text">Delivered</p>
                </div>
                <div class="col-4">
                    <p className="delivery-text">04-12-2020</p>
                </div>
                <div class="col-2">
                    <p className="delivery-text">14:00</p>
                </div>
        </div>
        );
    } else {
        return (
            <div class="row border delivery-one">
                <div class="col-6">
                    <p className="delivery-text">Delivered</p>
                </div>
                <div class="col-4">
                    <p className="delivery-text">04-12-2020</p>
                </div>
                <div class="col-2">
                    <p className="delivery-text">14:00</p>
                </div>
        </div>
        );
    }
    
}

export default Delivery;