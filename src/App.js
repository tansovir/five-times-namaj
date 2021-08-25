import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Prayerform from './component/Prayerform/Prayerform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';
import { Alert } from 'react-bootstrap';

function App() {
  
  return (
    <div className="full-container">
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <Alert variant="danger" className="text-center">Are you make your salah?</Alert>
            <Prayerform />
          </Col>
          <Col md={6} className="mt-5">
            <Alert variant="success" className="text-center">Your Amol History</Alert>
            <PrayerDisplay/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
