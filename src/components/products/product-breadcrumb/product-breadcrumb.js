import { Link } from "react-router-dom";
import { getProductList } from "../../../pages/product-database.js";
import "./product-breadcrumb.scss";

function ProductBreadcrumb(props) {
  let [product_list, product_name] = getProductList(
    props.type,
    props.productType
  );
  return (
    <div className="breadcrumb-container">
      <div>
        <Link to="/" className="breadcrumb-active">
          Clothing
        </Link>
      </div>
      <div className="breadcrumb-separater">/</div>
      <div className="breadcrumb-inactive capitalize">{props.type}</div>
      <div className="breadcrumb-separater">/</div>
      <div>
        <Link
          to={`/product/${props.type}/${props.productType}`}
          className="breadcrumb-active"
        >
          {product_name}
        </Link>
      </div>
    </div>
  );
}

export default ProductBreadcrumb;
