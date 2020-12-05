import React from 'react';
import destination from '../Assets/destination.svg';
import home from '../Assets/warehouse.svg'

import Delivery from './delivery';

function RightTable(props) {

    const apiData = props.data;
    const delivery = apiData.length > 0? apiData[0]["scan"]: [];

   
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                <div className="shadow-sm">
                    <img src={destination} width="35" height="35" className="rounded-circle img-background" alt="" loading="lazy"/>
                    
                    <div className="container">
                        <div className="line"></div>
                        {delivery.map((item) => (
                            <Delivery data={item}/>
                        ))}
                    </div>
                    <img src={home} width="35" height="35"  className="rounded-circle img-background" alt="" loading="lazy"/>
                </div> 
                </div>
                <div className="col-8">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">

                    <table className="table table-bordered table-striped">
                        <tr className="table-head">
                            <td scope="col">AWB NUMBER <i className="arrow down"></i></td>
                            <td scope="col">TRANSPORTER</td>
                            <td scope="col">SOURCE</td>
                            <td scope="col">DESTINATION</td>
                            <td scope="col">BRAND</td>
                            <td scope="col">START DATE</td>
                            <td scope="col">ETD</td>
                            <td>STATUS</td>
                        </tr>
                        <tbody>
                        {apiData.map((item) => (
                        <tr className="table-body">
                            <td>#{item.awbno}</td>
                            <td>{item.carrier}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.carrier}</td>
                            <td>{item.pickup_date}</td>
                            <td>{item.extra_fields.expected_delivery_date}</td>
                            <td>{item.current_status}</td>
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

export default RightTable;