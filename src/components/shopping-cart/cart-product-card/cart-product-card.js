import "./cart-product-card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Context from "../../../pages/context-helper.js";

function CartProductCard(props) {
  let data = props.data;

  function checkValid(e) {
    let value = parseInt(e.target.value);
    if (value >= 1 && value <= 9999) {
      return true;
    }

    return false;
  }

  function getValue(e) {
    return parseInt(e.target.value);
  }

  return (
    <Context.Consumer>
      {(context) => (
        <div className="cart-product-card-container">
          <div className="cart-product-card-items">
            <img src={data.img} className="cart-product-card-img" />
            <div className="item-visibility-small">
            <div className="cart-product-card-name">{data.name}</div>
            <div className="cart-product-card-price">HKD ${data.price}</div>
          </div>
          </div>
          <div className="cart-product-card-items item-visibility">
            <div className="cart-product-card-name">{data.name}</div>
            <div className="cart-product-card-price">HKD ${data.price}</div>
          </div>
          <div className="cart-product-card-items">
            <input
              type="text"
              id="cart-product-card-counter"
              className="cart-product-card-counter"
              value={context.productCount[props.pos]}
              onChange={(e) =>
                checkValid(e)
                  ? context.update(data.id, props.pos, getValue(e))
                  : ""
              }
            />
          </div>
          <div className="cart-product-card-items">
            HKD ${context.subTotal[props.pos]}
          </div>
          <div className="cart-product-card-items">
            <button
              className="cart-product-card-remove-button"
              onClick={() => context.remove(data.id, props.pos)}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default CartProductCard;
