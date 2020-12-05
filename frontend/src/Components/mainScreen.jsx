import React, { useEffect, useState } from 'react';
import Axios from "axios";
import TableView from './tableView';

function MainScreen(props) {

    const token = "tTU3gFVUdP";
    const email = "t.raman@iiitmanipur.ac.in";
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    let DEL = []
    let INT = []
    let OOD = []
    let DEX = []
    let NFI = []
    const [apiData,setApiData] = useState([]);
    const [filter, setFilter] = useState('DEL');
    const [shipments,setShipment] = useState([]);
    const [scan,setScan] = useState([]);

    useEffect(() => {
        Axios.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
            {email : email},
            config
        ).then(res => {
            for (let index = 0; index < res.data.length; index++) {
                if(res.data[index]["current_status_code"]==="DEL"){
                    DEL.push(res.data[index]);
                }
            }
            if(DEL.length>0){
                setScan(DEL[0]["scan"]);
            }
            setShipment(DEL);
            setApiData(res.data);
            
        });
        return () => {
        //
        };
    }, []);

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
        if(DEL[0]["scan"]){
            setScan(DEL[0]["scan"]);
        }
        setFilter("DEL");
        setShipment(DEL);
    }
    const INTHandler = (e) => {
        if(INT[0]["scan"]){
            setScan(INT[0]["scan"]);
        }
        setFilter("INT");
        setShipment(INT);
    }
    const OODHandler = (e) => {
        if(OOD[0]["scan"]){
            setScan(OOD[0]["scan"]);
        }
        setFilter("OOD");
        setShipment(OOD);
    }
    const DEXHandler = (e) => {
        if(DEX.length>0){
            setScan(DEX[0]["scan"]);
        }
        setFilter("DEX");
        setShipment(DEX);
    }
    const NFIHandler = (e) => {
        if(NFI[0]["scan"]){
            setScan(NFI[0]["scan"]);
        }
        setFilter("NFI");
        setShipment(NFI);
    }
    return (
        <>
        <div className="cart-set">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={DELHandler} className={filter==="DEL"? "cart-buttom-zero":"cart-buttom-one"}>
                    <p className="cart-head">DEL</p>
                    <p className="cart-body">{DEL.length}</p>
                </button>
                <button type="button" onClick={INTHandler} className={filter==="INT"? "cart-buttom-zero":"cart-buttom-one"}>
                    <p className="cart-head">INT</p>
                    <p className="cart-body">{INT.length}</p>
                </button>
                <button type="button" onClick={OODHandler} className={filter==="OOD"? "cart-buttom-zero":"cart-buttom-one"}>
                    <p className="cart-head">OOD</p>
                    <p className="cart-body">{OOD.length}</p>
                </button>
                <button type="button" onClick={DEXHandler} className={filter==="DEX"? "cart-buttom-zero":"cart-buttom-one"}>
                    <p className="cart-head">DEX</p>
                    <p className="cart-body">{DEX.length}</p>
                </button>
                <button type="button" onClick={NFIHandler} className={filter==="NFI"? "cart-buttom-zero":"cart-buttom-one"}>
                    <p className="cart-head">NFI</p>
                    <p className="cart-body">{NFI.length}</p>
                </button>
            </div>
        </div>
        <TableView data={{
            shipments:shipments,
            scams:scan}}/>
        </>
    );
}

export default  MainScreen;