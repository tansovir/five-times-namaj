import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Prayerform = () => {
    // console.log(props)
    return (
        <Form className="row mx-1 mx-md-0">
            <Form.Group controlId="fojor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Fojor</Form.Label>
                <Form.Check type="radio" value='No' name="fojor" label="No"/>
                <Form.Check type="radio" value="Right Time" name="fojor" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="fojor" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="fojor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="juhor" className='col-6 col-md-4 py-2 border rounded'> 
                <Form.Label>Juhor</Form.Label>
                <Form.Check type="radio" name="juhor" label="No"/>
                <Form.Check type="radio" name="juhor" label="Right Time"/>
                <Form.Check type="radio" name="juhor" label="Kaja"/>
                <Form.Check type="radio" name="juhor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="asor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Asor</Form.Label>
                <Form.Check type="radio" name="asor" label="No"/>
                <Form.Check type="radio" name="asor" label="Right Time"/>
                <Form.Check type="radio" name="asor" label="Kaja"/>
                <Form.Check type="radio" name="asor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="margrib" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Magrib</Form.Label>
                <Form.Check type="radio" name="margrib" label="No"/>
                <Form.Check type="radio" name="margrib" label="Right Time"/>
                <Form.Check type="radio" name="margrib" label="Kaja"/>
                <Form.Check type="radio" name="margrib" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="esha" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Esha</Form.Label>
                <Form.Check type="radio" name="esha" label="No"/>
                <Form.Check type="radio" name="esha" label="Right Time"/>
                <Form.Check type="radio" name="esha" label="Kaja"/>
                <Form.Check type="radio" name="esha" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group controlId="tahajjud" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Tahajjud</Form.Label>
                <Form.Check type="radio" name="tahajjud" label="No"/>
                <Form.Check type="radio" name="tahajjud" label="Yes"/>
            </Form.Group>
            <Button className="mt-3" variant="success" type="submit">Store Your Amol</Button>
            
        </Form>
    );
};

export default Prayerform;