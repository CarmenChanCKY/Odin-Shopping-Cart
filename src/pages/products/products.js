import Container from "react-bootstrap/Container";
import NavBar from "../../components/products/nav-bar/nav-bar.js";
import HeaderBar from "../../components/products/header-bar/header-bar.js";
import ProductList from "../../components/products/product-list/product-list.js";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import BackgroundImage from "../../assets/images/background-2.jpg";
import { getProductList } from "../product-database.js";
import { Scrollbars } from "react-custom-scrollbars";

function Product() {
  const { pathname } = useLocation();
  let { type, productType } = useParams();
  let [productData, productName] = getProductList(type, productType);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Scrollbars>
      <NavBar />
      <HeaderBar type={type} />
      <Container fluid style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <ProductList
          products={productData}
          type={type}
          productType={productType}
          productName={productName}
        />
      </Container>
    </Scrollbars>
  );
}

export default Product;
