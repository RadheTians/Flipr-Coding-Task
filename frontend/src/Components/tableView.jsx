import React, { useEffect, useState } from 'react';
import destination from '../Assets/img/destination.svg';
import home from '../Assets/img/warehouse.svg'
import moment from 'moment';

import Delivery from './delivery';

function TableView(props) {

    const apiData = props.data.shipments;
    const delivery = props.data.scams;
    const [deliverys,setDelivery] = useState(props.data.scams);
    // useEffect(() => {
    //     setDelivery();
    //     return () => {
    //     //
    //     };
    // }, []);
    let line = {
        position: 'absolute',
        zIndex: -1,
        top: 20,
        bottom: deliverys.length>0?170 - deliverys.length*35:170 - delivery.length*35,
        borderLeft: '2px dashed rgb(12, 228, 48)'
      };
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 left-table">
                    <div className="border shadow-sm">
                        <img src={destination} width="35" height="35" className="rounded-circle img-background" alt="" loading="lazy"/>
                        
                        <div className="container">
                            <div style={line}></div>
                            {deliverys.length>0?deliverys.map((item,index) => (
                                <Delivery key={index} data={item}/>
                            )): delivery.map((item,index) => (
                                <Delivery key={index} data={item}/>
                            ))
                            }
                        </div>
                        <img src={home} width="35" height="35" className="rounded-circle home-background" alt="" loading="lazy"/>
                    </div> 
                </div> 
                <div className="col-8">
                <div className="table-wrapper-scroll-y my-custom-scrollbar border">

                    <table className="table">
                        <tr className="table-head">
                            <td>AWB NUMBER <i className="arrow-small down"></i></td>
                            <td>TRANSPORTER</td>
                            <td>SOURCE</td>
                            <td>DESTINATION</td>
                            <td>BRAND</td>
                            <td>START DATE</td>
                            <td>ETD</td>
                            <td>STATUS</td>
                        </tr>
                        <tbody>
                        {apiData.map((item,index) => (
                        <tr key={index} className="table-body" onClick={() => item.scan? setDelivery(item.scan):[]}>
                            <td>#{item.awbno}</td>
                            <td>{item.carrier}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.carrier}</td>
                            <td>{moment.utc(item.pickup_date).local().format("DD/MM/YYYY")}</td>
                            <td>{item.extra_fields?moment.utc(item.extra_fields.expected_delivery_date).local().format("DD/MM/YYYY"):""}</td>
                            <td className={item.current_status==="Delivered"?"green-status":""}>{item.current_status}</td>
                        </tr>
                        ))}
                        
                        </tbody>
                    </table>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableView;