import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Prayerform = () => {
    const storeSalah = (e) => {
        e.preventDefault();
        console.log('clicked')
    }
    return (
        <Form onSubmit={storeSalah()} className="row mx-1 mx-md-0">
            <Form.Group controlId="formFojor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Fojor</Form.Label>
                <Form.Check type="radio" name="formFojor" label="No"/>
                <Form.Check type="radio" name="formFojor" label="Right Time"/>
                <Form.Check type="radio" name="formFojor" label="Kaja"/>
                <Form.Check type="radio" name="formFojor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formJuhor" className='col-6 col-md-4 py-2 border rounded'> 
                <Form.Label>Juhor</Form.Label>
                <Form.Check type="radio" name="formJuhor" label="No"/>
                <Form.Check type="radio" name="formJuhor" label="Right Time"/>
                <Form.Check type="radio" name="formJuhor" label="Kaja"/>
                <Form.Check type="radio" name="formJuhor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formAsor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Asor</Form.Label>
                <Form.Check type="radio" name="formAsor" label="No"/>
                <Form.Check type="radio" name="formAsor" label="Right Time"/>
                <Form.Check type="radio" name="formAsor" label="Kaja"/>
                <Form.Check type="radio" name="formAsor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formMagrib" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Magrib</Form.Label>
                <Form.Check type="radio" name="formMagrib" label="No"/>
                <Form.Check type="radio" name="formMagrib" label="Right Time"/>
                <Form.Check type="radio" name="formMagrib" label="Kaja"/>
                <Form.Check type="radio" name="formMagrib" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formEsha" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Esha</Form.Label>
                <Form.Check type="radio" name="formEsha" label="No"/>
                <Form.Check type="radio" name="formEsha" label="Right Time"/>
                <Form.Check type="radio" name="formEsha" label="Kaja"/>
                <Form.Check type="radio" name="formEsha" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formTahajjud" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Tahajjud</Form.Label>
                <Form.Check type="radio" name="formTahajjud" label="No"/>
                <Form.Check type="radio" name="formTahajjud" label="Yes"/>
            </Form.Group>
            <Button className="mt-3" variant="success" type="submit">Store Your Amol</Button>
            
        </Form>
    );
};

export default Prayerform;