import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Prayerform from './component/Prayerform/Prayerform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
// const apiUrl = 'http://localhost/salah-api/public/api/salahs';
const apiUrl = 'http://localhost/salah/salah-laravel-rest-api/public/api/salahs';


function App() {
  const [salah, setSalah] = useState({});
  useEffect(()=>{
    axios.get(apiUrl).then((res)=>{
      const data = res.data;
      setSalah(data);
    })
  },[])

  
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
            <PrayerDisplay salah={salah} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
