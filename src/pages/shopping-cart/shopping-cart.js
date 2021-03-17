import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartList from "../../components/shopping-cart/cart-list/cart-list.js";
import NavBar from "../../components/products/nav-bar/nav-bar.js";
import CheckoutPanel from "../../components/shopping-cart/checkout-panel/checkout-panel.js";
import { Scrollbars } from "react-custom-scrollbars";
import "./shopping-cart.scss";
import { useState } from "react";
import {
  setStorageItem,
  getStrorageList,
  removeStorageItem,
} from "../storage-helper.js";
import CartContext from "../context-helper.js";

function ShoppingCart() {
  let cartlist = getStrorageList();
  let productCountList = [];
  let subTotalList = [];

  for (let i = 0; i < cartlist.length; i++) {
    productCountList.push(cartlist[i].productCount);
    subTotalList.push(cartlist[i].subTotal);
  }
  const [productCount, updateProductCount] = useState(productCountList);
  const [subTotal, updateSubTotal] = useState(subTotalList);

  function updateproductCount(key, pos, count) {
    cartlist[pos].productCount = count;
    cartlist[pos].subTotal = count * parseInt(cartlist[pos].price);
    setStorageItem(String(key), cartlist[pos]);

    let tempCountArr = [...productCount];
    tempCountArr[pos] = count;
    updateProductCount(tempCountArr);

    let tempTotalArr = [...subTotal];
    tempTotalArr[pos] = cartlist[pos].subTotal;
    updateSubTotal(tempTotalArr);
  }

  function removeProduct(key, pos) {
    let tempArr = [...productCount];
    tempArr.splice(pos, 1);
    updateProductCount(tempArr);

    let tempTotalArr = [...subTotal];
    tempTotalArr.splice(pos, 1);
    updateSubTotal(tempTotalArr);

    cartlist.splice(pos, 1);
    removeStorageItem(key);
  }
  return (
    <Scrollbars>
      <Container
        fluid
        className="shopping-cart-container vh-100 d-flex flex-column"
      >
        <Row>
          <Col className="col-no-padding">
            <NavBar />
          </Col>
        </Row>
        <Row className="justify-content-xl-center">
          <Col xl={11} lg={12}>
            <div className="shopping-cart-item-count">
              Shopping Cart ({productCount.length} items)
            </div>
          </Col>
        </Row>
        <CartContext.Provider
          value={{
            productCount: productCount,
            subTotal: subTotal,
            update: updateproductCount,
            remove: removeProduct,
          }}
        >
          <Row className="justify-content-xl-center h-100">
            <Col xl={8} lg={9} className="h-70">
              <CartList data={cartlist} />
            </Col>
            <Col xl={3} lg={3} className="h-30">
              <CheckoutPanel />
            </Col>
          </Row>
        </CartContext.Provider>
      </Container>
    </Scrollbars>
  );
}

export default ShoppingCart;
