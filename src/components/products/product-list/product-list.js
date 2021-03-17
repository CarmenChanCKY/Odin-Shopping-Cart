import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./product-list.scss";
import ProductCard from "../product-card/product-card.js";
import SideNav from "../side-nav/side-nav.js";

function ProductList(props) {
  return (
    <>
      <Row>
        <Col className="center-content sub-heading">{props.productName}</Col>
      </Row>
      <Row className="center-content">
        <Col lg={2} className="hide">
          <SideNav />
        </Col>
        <Col className="center-content" xl={8} lg={10}>
          <div className="product-grid-container">
            {props.products.map(function (item, i) {
              return (
                <div className="product-grid-item">
                  <ProductCard
                    product={item}
                    type={props.type}
                    productType={props.productType}
                  />
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ProductList;
