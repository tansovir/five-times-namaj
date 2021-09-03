import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Prayerform = (props) => {
    // console.log(props)
    const {getNewSalahs, setNewSalahs} = props;
    return (
        <Form onSubmit={setNewSalahs} className="row mx-1 mx-md-0">
            <Form.Group onChange={getNewSalahs} controlId="fojor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>Fojor</Form.Label>
                <Form.Check type="radio" value='No' name="fojor" label="No"/>
                <Form.Check type="radio" value="Right Time" name="fojor" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="fojor" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="fojor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group onChange={getNewSalahs} controlId="juhor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>juhor</Form.Label>
                <Form.Check type="radio" value='No' name="juhor" label="No"/>
                <Form.Check type="radio" value="Right Time" name="juhor" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="juhor" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="juhor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group onChange={getNewSalahs} controlId="asor" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>asor</Form.Label>
                <Form.Check type="radio" value='No' name="asor" label="No"/>
                <Form.Check type="radio" value="Right Time" name="asor" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="asor" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="asor" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group onChange={getNewSalahs} controlId="magrib" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>magrib</Form.Label>
                <Form.Check type="radio" value='No' name="magrib" label="No"/>
                <Form.Check type="radio" value="Right Time" name="magrib" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="magrib" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="magrib" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group onChange={getNewSalahs} controlId="esha" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>esha</Form.Label>
                <Form.Check type="radio" value='No' name="esha" label="No"/>
                <Form.Check type="radio" value="Right Time" name="esha" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="esha" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="esha" label="Befor Kaja"/>
            </Form.Group>
            <Form.Group onChange={getNewSalahs} controlId="tahajjud" className='col-6 col-md-4 py-2 border rounded'>
                <Form.Label>tahajjud</Form.Label>
                <Form.Check type="radio" value='No' name="tahajjud" label="No"/>
                <Form.Check type="radio" value="Right Time" name="tahajjud" label="Right Time"/>
                <Form.Check type="radio" value="Kaja" name="tahajjud" label="Kaja"/>
                <Form.Check type="radio" value="Befor Kaja" name="tahajjud" label="Befor Kaja"/>
            </Form.Group>

            <Button className="mt-3" variant="success" type="submit">Store Your Amol</Button>
            
        </Form>
    );
};

export default Prayerform;