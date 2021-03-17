import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIntroductionArea from "./home-introduction-area.js";
import HomeSelectionArea from "./home-selection-area.js";
import "./home.scss";

function Home() {
  return (
    <Container fluid>
      <HomeIntroductionArea />
      <HomeSelectionArea />
    </Container>
  );
}

export default Home;
