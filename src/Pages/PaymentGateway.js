import React, { useEffect, useRef } from 'react'


const PaymentGateway = () => {
  const paypal = useRef();

  useEffect(() => {
    if (!paypal.current.hasChildNodes()) {
      window.paypal.Buttons({
       
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [{
              description: "PAYMENT GATEWAY",
              amount: {
                currency_code: "CAD",
                value: 650.00
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Successful order", order);
        },
        onError: (err) => {
          console.log(err);
        }
      }).render(paypal.current);
    }
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

export default PaymentGateway
