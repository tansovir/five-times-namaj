import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Prayerform from './component/Prayerform/Prayerform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiURL = `http://localhost/salah/salah-laravel-rest-api/public/api/salahs`;
  const emptySalah = {
    fojor: '',
    juhor: '',
    asor: '',
    magrib: '',
    esha: '',
    tahajjud: ''
  }
  const [salahs, setSalahs] = useState([]);
  const [newSalahs, setnewSalahs] = useState(emptySalah);
  useEffect(()=>{
    loadAPI(apiURL);
  },[apiURL])
  // load api and set data to useState
  const loadAPI = async url => {
    await axios.get(url).then((res)=>{
      const data = res.data;
      // update salahs
      setSalahs(data);
    })
  }
  // set new salah to api by onsubmit event
  const setNewSalahs = async e => {
    e.preventDefault();
    await axios.post(apiURL, newSalahs).catch(res=>console.log(res));
    loadAPI(apiURL);
    e.target.reset();
    setnewSalahs(emptySalah);
  }
  // get new salah from user form by onchange event
  const getNewSalahs = e => {
    setnewSalahs({...newSalahs,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div className="full-container">
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <Alert className="text-center bg-danger text-white">Are you make your salah?</Alert>
            <Prayerform setNewSalahs={setNewSalahs} getNewSalahs={getNewSalahs}/>
          </Col>
          <Col md={6} className="mt-5">
            <Alert className="text-center bg-success text-white">Your Amol History</Alert>
            <PrayerDisplay salahs={salahs} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
