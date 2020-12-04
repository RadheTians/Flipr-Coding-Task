import React from 'react';
import CartButtom from './CartButtom';

import RightTable from './rightTable';
import LeftTable from './leftTable';

function MainScreen(props) {

    return (
        <>
        <div class="container">
            <div class="row cart-set">
                <CartButtom/>
                <CartButtom/>
                <CartButtom/>
                <CartButtom/>
                <CartButtom/>
            </div>
        </div>
        <div class="container-fluid">
        <div class="row">
            <div class="col-4">
                <LeftTable/>
            </div>
            <div class="col-8">
                <RightTable/>
            </div>
        </div>
        </div>
        
        </>
    );
}

export default  MainScreen;