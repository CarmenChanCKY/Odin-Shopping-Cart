import "./side-nav.scss";
import { Link } from "react-router-dom";
import {
  product_man_link,
  product_man_link_name,
  product_woman_link,
  product_woman_link_name,
} from "../../../pages/product-database.js";

function SideNav() {
  return (
    <div className="side-nav-container">
      <ul className="side-nav">
        <li className="side-nav-heading">Man</li>
        {product_man_link.map(function (arr, index) {
          return (
            <li>
              <Link className="side-nav-text" to={`/product/man/${arr}`}>
                {product_man_link_name[index]}
              </Link>
            </li>
          );
        })}

        <li className="side-nav-heading">Woman</li>
        {product_woman_link.map(function (arr, index) {
          return (
            <li>
              <Link className="side-nav-text" to={`/product/woman/${arr}`}>
                {product_woman_link_name[index]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNav;
