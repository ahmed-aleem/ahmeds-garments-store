import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xmsm9YF8dDZxbERFPeiLCWxz00k9NNXVn8';

    const onToken = (callback) => {
        console.log(callback);
        alert('Payment Successful!');
    }

    return ( 
        <StripeCheckout
        name="Ahmed's Clothing Pvt. Ltd."
        description="Clothing Store for Men and Women" 
        image="https://i.ibb.co/8svgJC3/Union.png" 
        label="Buy Now"
        panelLabel="Pay Now"
        price={price}
        amount={priceForStripe}
        stripeKey={publishableKey}
        shippingAddress
        billingAddress={false}
        zipCode={false}
        token={onToken} // submit callback 
        />
     );
}
 
export default StripeCheckoutButton;