import "./header-bar.scss";
import { header_element } from "../../../pages/product-database.js";

function HeaderBar(props) {
  return (
    <div
      className="header-bar-container"
      style={
        props.type === header_element[0].type
          ? { backgroundImage: `url(${header_element[0].image})` }
          : { backgroundImage: `url(${header_element[1].image})` }
      }
    >
      <div className="header-bar-text">{props.type}</div>
    </div>
  );
}

export default HeaderBar;
