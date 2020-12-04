import React, { useEffect, useState } from 'react';
import CartButtom from './CartButtom';
import { useSelector, useDispatch } from 'react-redux';
import RightTable from './rightTable';

import callAPI  from '../Action/APIEndPoint';

import data from '../data';

function MainScreen(props) {

    const dispatch = useDispatch();
    const [filter, setFilter] = useState('DEL');

    //dispatch(callAPI("t.raman@iiitmanipur.ac.in", "Radhe Raman Tiwari"));
    const apiData = data["data"];
    let DEL = []
    let INT = []
    let OOD = []
    let DEX = []
    let NFI = []
    for (let index = 0; index < apiData.length; index++) {
        if(apiData[index]["current_status_code"]==="DEL"){
            DEL.push(apiData[index]);
        } else if(apiData[index]["current_status_code"]==="INT"){
            INT.push(apiData[index]);
        } else if(apiData[index]["current_status_code"]==="OOD"){
            OOD.push(apiData[index]);
        } else if(apiData[index]["current_status_code"]==="DEX"){
            DEX.push(apiData[index]);
        } else {
            NFI.push(apiData[index]);
        }
    }
    const apis = DEL;
    const submitHandler = (e) => {
        setFilter("")
    }
    console.log(filter)
    return (
        <>
        <div className="container">
            <div className="row cart-set">
                <CartButtom 
                onClick={submitHandler}
                    data={{
                        "counter": DEL.length,
                        "text": "DEL"
                    }}/>
                <CartButtom data={{
                    "counter": INT.length,
                    "text": "INT"
                }}/>
                <CartButtom data={{
                    "counter": OOD.length,
                    "text": "OOD"
                }}/>
                <CartButtom data={{
                    "counter": DEX.length,
                    "text": "DEX"
                }}/>
                <CartButtom data={{
                    "counter": NFI.length,
                    "text": "NFI"
                }}/>
            </div>
        </div>
        <RightTable data={apis}/>
        </>
    );
}

export default  MainScreen;