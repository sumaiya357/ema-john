

import React from 'react';

const Cart = (props) => {
    return (
        <div>
            

        <h4>Order Summary</h4>
        <p>Selected Item:{props.cart.length} </p>
        {/* <p>Selected Items:{cart.length}</p> */}
        
        </div>
            );
};

export default Cart;