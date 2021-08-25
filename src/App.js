import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Userform from './component/Userform/Userform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';

function App() {
  return (
    <div className="full-container">
      <Container>
        <Row>
          <Col md={6}>
            <Userform />
          </Col>
          <Col md={6}>
            <PrayerDisplay/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
