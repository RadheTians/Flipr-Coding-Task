import React from 'react';
import CartButtom from './CartButtom';
import { useSelector, useDispatch } from 'react-redux';
import RightTable from './rightTable';

import callAPI  from '../Action/APIEndPoint';

import data from '../data';

function MainScreen(props) {

    const dispatch = useDispatch();

    //dispatch(callAPI("t.raman@iiitmanipur.ac.in", "Radhe Raman Tiwari"));
    const apiData = data["data"];
    let DEL = 0;
    let INT = 0;
    let OOD = 0;
    let DEX = 0;
    let NFI = 0;
    for (let index = 0; index < apiData.length; index++) {
        if(apiData[index]["current_status_code"]==="DEL"){
            DEL++;
        } else if(apiData[index]["current_status_code"]==="INT"){
            INT++;
        } else if(apiData[index]["current_status_code"]==="OOD"){
            OOD++;
        } else if(apiData[index]["current_status_code"]==="DEX"){
            DEX++;
        } else {
            NFI++;
        }
    }
    return (
        <>
        <div className="container">
            <div className="row cart-set">
                <CartButtom data={{
                    "counter": DEL,
                    "text": "DEL"
                }}/>
                <CartButtom data={{
                    "counter": INT,
                    "text": "INT"
                }}/>
                <CartButtom data={{
                    "counter": OOD,
                    "text": "OOD"
                }}/>
                <CartButtom data={{
                    "counter": DEX,
                    "text": "DEX"
                }}/>
                <CartButtom data={{
                    "counter": NFI,
                    "text": "NFI"
                }}/>
            </div>
        </div>
        <RightTable data={apiData}/>
        </>
    );
}

export default  MainScreen;