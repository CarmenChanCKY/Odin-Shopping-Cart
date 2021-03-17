import "./product-card.scss";
import { useHistory } from "react-router-dom";

function ProductCard(props) {
  let product = props.product;
  let type=props.type;
  let productType=props.productType;
  let history = useHistory();

  let productListener=()=>{
   // history.push("/detail/"+`${type}`+"/"+`${productType}`+"/"+`${product.id}`);
    history.push(`/detail/${type}/${productType}/${product.id}`);
  }

  return (
    <div className="product-card-container" onClick={productListener}>
      <div>
        <img src={product.img} className="product-card-img" alt={product.name} />
      </div>
      <div className="product-card-name">{product.name}</div>
      <div className="product-card-price">HKD ${product.price}</div>
    </div>
  );
}

export default ProductCard;
