import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductBreadcrumb from "../../../components/products/product-breadcrumb/product-breadcrumb.js";
import ProductCounter from "../../../components/products/product-counter/product-counter.js";
import "./product-detail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getProductDetail } from "../../product-database.js";
import { Scrollbars } from "react-custom-scrollbars";
import MessageModal from "../../../components/products/message-modal/message-modal.js";
import * as storage from "../../storage-helper.js";

function ProductDetail() {
  let history = useHistory();
  let { type, productType, productID } = useParams();

  function goBack() {
    history.goBack();
  }

  let productDetailData = getProductDetail(type, productType, productID);

  const [isShowModal, setShowModal] = useState(false);
  const [productCount, setProductCount] = useState(1);

  function addToCartListener() {
    if (storage.checkStorageItemExist(productID)) {
      let currentData = storage.getStorageItem(productID);
      let prevCount = parseInt(currentData["productCount"]);
      currentData["productCount"] = prevCount + productCount;
      currentData["subTotal"] =
        currentData["productCount"] * parseInt(productDetailData.price);
      storage.setStorageItem(productID, currentData);
    } else {
      productDetailData["productCount"] = productCount;
      productDetailData["subTotal"] =
        productCount * parseInt(productDetailData.price);
      storage.setStorageItem(productID, productDetailData);
    }
    setShowModal(true);
  }

  function updateProductCount(count) {
    setProductCount(count);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <Scrollbars>
      <Container fluid className="product-detail">
        <Row>
          <Col>
            <ProductBreadcrumb type={type} productType={productType} />
          </Col>
        </Row>
        <Row className="row-full-height">
          <Col className="center-detail-content" xl={5} lg={6}>
            <img
              className="product-detail-img"
              src={productDetailData.img}
              alt={productDetailData.name}
            />
          </Col>
          <Col className="center-detail-content">
            <div className="product-detail-name">{productDetailData.name}</div>
            <div className="product-detail-price">
              HKD ${productDetailData.price}
            </div>
            <ProductCounter count={productCount} action={updateProductCount} />
            <div>
              <button
                className="add-to-cart-button"
                onClick={addToCartListener}
              >
                Add To Cart
              </button>
            </div>
            <div className="back-button-container">
              <div className="back-button" onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} /> Back
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <MessageModal state={isShowModal} action={closeModal} />
    </Scrollbars>
  );
}

export default ProductDetail;
