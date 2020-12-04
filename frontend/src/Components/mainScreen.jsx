import React from 'react';
import CartButtom from './CartButtom';
import { useSelector, useDispatch } from 'react-redux';
import RightTable from './rightTable';
import LeftTable from './leftTable';

import callAPI  from '../Action/APIEndPoint';

function MainScreen(props) {

    const dispatch = useDispatch();

    dispatch(callAPI("t.raman@iiitmanipur.ac.in", "Radhe Raman Tiwari"));
    return (
        <>
        <div className="container">
            <div className="row cart-set">
                <CartButtom/>
                <CartButtom/>
                <CartButtom/>
                <CartButtom/>
                <CartButtom/>
            </div>
        </div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                <LeftTable/>
            </div>
            <div className="col-8">
                <RightTable/>
            </div>
        </div>
        </div>
        
        </>
    );
}

export default  MainScreen;