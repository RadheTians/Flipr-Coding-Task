import React, { useEffect, useState } from 'react';
import Axios from "axios";
import CartButtom from './CartButtom';
import RightTable from './rightTable';

function MainScreen(props) {

    const token = "tTU3gFVUdP";
    const email = "t.raman@iiitmanipur.ac.in";
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        Axios.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
            {email : email},
            config
        ).then(res => {
            setApiData(res.data);
        });
        return () => {
        //
        };
    }, []);
    const [filter, setFilter] = useState('DEL');
    const [apiData,setApiData] = useState([]);
    const [shipments,setShipment] = useState([]);
  
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

    const DELHandler = (e) => {
        setShipment(DEL);
    }
    const INTHandler = (e) => {
        setShipment(INT);
    }
    const OODHandler = (e) => {
        setShipment(OOD);
    }
    const DEXHandler = (e) => {
        setShipment(DEX);
    }
    const NFIHandler = (e) => {
        setShipment(NFI);
    }
    
    
    return (
        <>
        <div className="btn-group cart-set" role="group" aria-label="Basic example">
            <button type="button" onClick={DELHandler} class="btn cart-buttom">
                <p className="cart-head">DEL</p>
                <p className="cart-body">{DEL.length}</p>
            </button>
            <button type="button" onClick={INTHandler} class="btn cart-buttom">
                <p className="cart-head">INT</p>
                <p className="cart-body">{INT.length}</p>
            </button>
            <button type="button" onClick={OODHandler} class="btn cart-buttom">
                <p className="cart-head">OOD</p>
                <p className="cart-body">{OOD.length}</p>
            </button>
            <button type="button" onClick={DEXHandler} class="btn cart-buttom">
                <p className="cart-head">DEX</p>
                <p className="cart-body">{DEX.length}</p>
            </button>
            <button type="button" onClick={NFIHandler} class="btn cart-buttom">
                <p className="cart-head">NFI</p>
                <p className="cart-body">{NFI.length}</p>
            </button>
        </div>
        <RightTable data={shipments}/>
        </>
    );
}

export default  MainScreen;