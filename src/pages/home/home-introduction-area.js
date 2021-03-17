import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-scroll";

function HomeIntroductionArea() {
  return (
    <Row className="introduction-area" >
      <Col>
        <div className="introduction-text-container">
          <p className="introduction-heading-text">Clothing</p>
          <p className="introduction-sub-text">Discover Your New Style</p>
          <Link className="introduction-buttton" to="selection-area"
            smooth={true}
            duration={800}>Shop Now</Link>
        </div>
      </Col>
    </Row>
  );
}

export default HomeIntroductionArea;
