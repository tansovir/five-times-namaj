import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Prayerform from './component/Prayerform/Prayerform';
import PrayerDisplay from './component/PrayerDisplay/PrayerDisplay';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
const apiUrl = 'http://localhost/salah-api/public/api/salahs';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


function App() {
  const [salah, setSalah] = useState({});
  useEffect(()=>{
    axios.get(apiUrl).then((res)=>{
      console.log(res);
    })
  },[])


  const salahSubmitHandler = (event) => {
    event.preventDefault();
    console.log('clicked')
  }
  const onChangeHandler = (e) => {
    const newSalah = {...salah};
    newSalah[e.target.id] = e.target.value;
    setSalah(newSalah);
    console.log(newSalah)
  }
  
  return (
    <div className="full-container">
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <Alert variant="danger" className="text-center">Are you make your salah?</Alert>
            <Prayerform salah={salah} salahSubmitHandler={salahSubmitHandler} onChangeHandler={onChangeHandler} />
          </Col>
          <Col md={6} className="mt-5">
            <Alert variant="success" className="text-center">Your Amol History</Alert>
            <PrayerDisplay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
