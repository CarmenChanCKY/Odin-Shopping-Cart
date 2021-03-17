import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {homes_selection_card_element} from '../product-database.js';
import SelectionCard from "../../components/home/selection-card/selection-card.js";

function HomeSelectionArea() {
  return (
    <Row className="selection-area" name="selection-area">
      {homes_selection_card_element.map(function (arr, index) {
        return (
          <Col>
            <SelectionCard key={index} data={arr} />
          </Col>
        );
      })}
    </Row>
  );
}

export default HomeSelectionArea;
