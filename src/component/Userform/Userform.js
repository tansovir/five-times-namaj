import React from 'react';
import { Form } from 'react-bootstrap';

const Userform = () => {
    return (
        <Form className="row">
            <Form.Group controlId="formFojor" className='col-6 col-md-4 mb-3'>
                <Form.Label>Fojor</Form.Label>
                <Form.Check type="radio" name="formFojor" label="No"/>
                <Form.Check type="radio" name="formFojor" label="Right Time"/>
                <Form.Check type="radio" name="formFojor" label="Kaja"/>
                <Form.Check type="radio" name="formFojor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formJuhor" className='col-6 col-md-4 mb-3'> 
                <Form.Label>Juhor</Form.Label>
                <Form.Check type="radio" name="formJuhor" label="No"/>
                <Form.Check type="radio" name="formJuhor" label="Right Time"/>
                <Form.Check type="radio" name="formJuhor" label="Kaja"/>
                <Form.Check type="radio" name="formJuhor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formAsor" className='col-6 col-md-4 mb-3'>
                <Form.Label>Asor</Form.Label>
                <Form.Check type="radio" name="formAsor" label="No"/>
                <Form.Check type="radio" name="formAsor" label="Right Time"/>
                <Form.Check type="radio" name="formAsor" label="Kaja"/>
                <Form.Check type="radio" name="formAsor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formMagrib" className='col-6 col-md-4 mb-3'>
                <Form.Label>Magrib</Form.Label>
                <Form.Check type="radio" name="formMagrib" label="No"/>
                <Form.Check type="radio" name="formMagrib" label="Right Time"/>
                <Form.Check type="radio" name="formMagrib" label="Kaja"/>
                <Form.Check type="radio" name="formMagrib" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formEsha" className='col-6 col-md-4 mb-3'>
                <Form.Label>Esha</Form.Label>
                <Form.Check type="radio" name="formEsha" label="No"/>
                <Form.Check type="radio" name="formEsha" label="Right Time"/>
                <Form.Check type="radio" name="formEsha" label="Kaja"/>
                <Form.Check type="radio" name="formEsha" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="formTahajjud" className='col-6 col-md-4 mb-3'>
                <Form.Label>Tahajjud</Form.Label>
                <Form.Check type="radio" name="formTahajjud" label="No"/>
                <Form.Check type="radio" name="formTahajjud" label="Right Time"/>
                <Form.Check type="radio" name="formTahajjud" label="Kaja"/>
                <Form.Check type="radio" name="formTahajjud" label="Befor Kaja"/>
            </Form.Group>
            
        </Form>
    );
};

export default Userform;