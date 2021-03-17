import "./cart-list.scss";
import { Link } from "react-router-dom";
import CartProductCard from "../cart-product-card/cart-product-card.js";
import { Scrollbars } from "react-custom-scrollbars";

function CartList(props) {
  let listItem = props.data;

  return (
    <div className="cart-list-container">
      <div
        className={
          listItem.length == 0
            ? "cart-list-empty-container cart-list-empty-container-show"
            : "cart-list-hide"
        }
      >
        <div className="cart-list-empty-text">Your Shopping Cart is Empty!</div>
        <Link className="shop-now-buttton" to="/product/man/tShirt">
          Shop Now
        </Link>
      </div>
      <div
        className={
          listItem.length == 0 ? "cart-list-hide" : "cart-list-item-container"
        }
      >
        <div className="cart-list-header-container">
          <div className="cart-list-header-items">Item</div>
          <div className="cart-list-header-items header-visibility"></div>
          <div className="cart-list-header-items">Amount</div>
          <div className="cart-list-header-items">Total</div>
          <div className="cart-list-header-items header-visibility">Remove</div>
        </div>
        <div>
          <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
            {listItem.map(function (item, i) {
              return <CartProductCard data={item} pos={i} />;
            })}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default CartList;
