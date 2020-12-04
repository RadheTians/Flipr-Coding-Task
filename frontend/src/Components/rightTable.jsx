import React from 'react';
import LeftTable from './leftTable';

function RightTable(props) {

    const apiData = props.data;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <LeftTable/>
                </div>
                <div className="col-8">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">

                    <table className="table table-bordered table-striped mb-0">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        {apiData.map((item) => (
                        <tr>
                            <td>{item.awbno}</td>
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