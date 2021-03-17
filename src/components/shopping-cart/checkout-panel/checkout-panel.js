import "./checkout-panel.scss";
import Context from "../../../pages/context-helper.js";
function CheckoutPanel() {
  function calculateTotal(subTotal) {
    let total = 0;
    for (let i = 0; i < subTotal.length; i++) {
      total += subTotal[i];
    }
    return total;
  }
  return (
    <div className="checkout-panel-container">
      <div className="checkout-panel-title">Order Summary</div>
      <div className="checkout-panel-total-container">
        <div className="checkout-panel-total-text">Total</div>
        <Context.Consumer>
          {(context) => <div className="checkout-panel-total">HKD ${calculateTotal(context.subTotal)}</div>}
        </Context.Consumer>
      </div>
      <div className="checkout-panel-button">Checkout</div>
    </div>
  );
}

export default CheckoutPanel;
