import "./selection-card.scss";
import { useHistory } from "react-router-dom";

function SelectionCard(props) {
  let history = useHistory();
  let typeListener = () => {
    //history.push("/product/"+`${props.data.type}`+"/"+`${props.data.productType}`);
    history.push(`/product/${props.data.type}/${props.data.productType}`);
  };

  return (
    <div className="selection-card-container">
      <div
        className="selection-card"
        style={{ backgroundImage: `url(${props.data.image})` }}
        onClick={typeListener}
      >
        <p className="selection-card-text">{props.data.type}</p>
      </div>
    </div>
  );
}

export default SelectionCard;
