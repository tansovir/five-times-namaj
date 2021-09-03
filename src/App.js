import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Prayerform from './component/Prayerform/Prayerform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
// const apiUrl = 'http://localhost/salah-api/public/api/salahs';



function App() {
  const apiURL = `http://localhost/salah/salah-laravel-rest-api/public/api/salahs`;
  const [salahs, setSalahs] = useState([]);
  const [newSalahs, setnewSalahs] = useState({
    fojor: '',
    juhor: '',
    asor: '',
    magrib: '',
    esha: '',
    tahajjud: ''
  });
  useEffect(()=>{
    loadAPI(apiURL);
  },[])
  // load api
  const loadAPI = url => {
    axios.get(url).then((res)=>{
      const data = res.data;
      setSalahs(data);
    })
  }
  // set new salah to api
  const setNewSalahs = e => {
    e.preventDefault();
    const apiURL = `http://localhost/salah/salah-laravel-rest-api/public/api/salahs`;
    axios.post(apiURL, newSalahs).then(res=>console.log(res));
    setnewSalahs({
      fojor: '',
      juhor: '',
      asor: '',
      magrib: '',
      esha: '',
      tahajjud: ''
    })
  }
  // get new salah from user form
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
            <Alert variant="danger" className="text-center">Are you make your salah?</Alert>
            <Prayerform setNewSalahs={setNewSalahs} getNewSalahs={getNewSalahs}/>
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
