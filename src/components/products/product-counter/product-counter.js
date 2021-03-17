import "./product-counter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function ProductCounter(props) {
  let count = props.count;
  let updateProductCount = props.action;

  function addProductAmount() {
    if (count < 9999) {
      updateProductCount(count + 1);
    }
  }
  function subtractProductAmount() {
    if (count > 1) {
      updateProductCount(count - 1);
    }
  }
  function changeProductAmount(e) {
    let value = parseInt(e.target.value);
    if (value >= 1 && value <= 9999) {
      updateProductCount(value);
    }
  }

  return (
    <div className="product-counter">
      <div>
        <button
          className="product-counter-button"
          onClick={subtractProductAmount}
        >
          <FontAwesomeIcon icon={faMinusCircle} size="lg" />
        </button>
      </div>
      <div>
        <input
          type="text"
          id="product-counter-input"
          className="product-counter-input"
          value={count}
          onChange={changeProductAmount}
        />
      </div>
      <div>
        <button className="product-counter-button" onClick={addProductAmount}>
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default ProductCounter;
