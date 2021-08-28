import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Prayerform from './component/Prayerform/Prayerform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
// const apiUrl = 'http://localhost/salah-api/public/api/salahs';



function App() {
  const [salahs, setSalahs] = useState([]);
  useEffect(()=>{
    const apiURL = 'http://localhost/salah/salah-laravel-rest-api/public/api/salahs';
    axios.get(apiURL).then((res)=>{
      const data = res.data;
      setSalahs(data);
    })
  },[])
  const salahSubmitHandler = (e) => {
    e.preventDefault();
  }
  const salahOnChangeHandler = (e) => {
    const {name, value} = e.target;
    console.log(name, ':' , value);
  }

  
  return (
    <div className="full-container">
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <Alert variant="danger" className="text-center">Are you make your salah?</Alert>
            <Prayerform salahSubmitHandler={salahSubmitHandler} salahOnChangeHandler={salahOnChangeHandler}/>
          </Col>
          <Col md={6} className="mt-5">
            <Alert variant="success" className="text-center">Your Amol History</Alert>
            <PrayerDisplay salahs={salahs} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
