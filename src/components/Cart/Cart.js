import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, pd) => (total + pd.price), 0);
    // console.log(props.cart);
    // ITEM COST
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const pd = cart[i];
        total = total + pd.price* pd.quantity;
           
    }
    // SHIPPING COST
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 0 && total < 35) {
        shipping = 4.99;
    }
    // TAX COST
    let tax = (total / 5);
    let grantTotal = (total + shipping + tax);

    const formatNum = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p><small>Item cost: ${formatNum(total)}</small></p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax: ${formatNum(tax)}</small></p>
            <p>Order Total: ${formatNum(grantTotal)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;