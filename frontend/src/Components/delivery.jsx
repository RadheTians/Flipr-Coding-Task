import React from 'react';

function Delivery(props) {

    const data = props.data;
    if(data.status_detail==="DELIVERED"){
        return (
            <>
            <div className="hr-line"/> 
            <div class="border delivery-zero">
                <pre className="delivery-text"> {data.status_detail}    {data.time}</pre>
            </div>
            </>
        );
    } else {
        return (
            <>
            <div className="hr-line"/>
            <div class="border delivery-one">
               <pre className="delivery-text"> {data.status_detail}     {data.time}</pre>
            </div>
            </>
        );
    }
    
}

export default Delivery;