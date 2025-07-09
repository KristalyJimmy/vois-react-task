import React, {useState} from 'react';
import '../styles/Cart.css';

function Cart({ cartItems }) {
    const [loading, setLoading] = useState(false);
    const totalUnits = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalOrderValue = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            window.open('https://kristalyjimmy.github.io/thank-you/', '_blank'); 
            setLoading(false);
        }, 3000);
    };

    return (
        <div className="cart-card">
        <h2 className="cart-card-title">You have {totalUnits} item{totalUnits !== 1 ? 's' : ''} in your cart!</h2>
        
        <div className="cart-columns">
            <div className="cart-column-header">Items</div>
            <div className="cart-column-header">Units</div>
            <div className="cart-column-header">Price</div>
            
            {cartItems.map(({ id, name, price, quantity }) => (
            <React.Fragment key={id}>
                <div className="cart-column-item">{name}</div>
                <div className="cart-column-item">{quantity}</div>
                <div className="cart-column-item">£{(price * quantity).toFixed(2)}</div>
            </React.Fragment>
            ))}
        </div>
        <hr />
        <div className="cart-total">
            Total Order Value: <span className="cart-total-price">£{totalOrderValue.toFixed(2)}</span>
        </div>
         {loading ? (   <div className="checkout-spinner">
                            <div className="spinner"></div>
                            <p>Proceeding to intergalactic payment gateway...</p>
                        </div> ) : (<button className="checkout-button" onClick={handleCheckout}>Checkout</button>)
        }
        </div>
    );
}

export default Cart;
