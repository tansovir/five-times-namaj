import React from 'react';
import { Table } from 'react-bootstrap';
import PrayerData from './PrayerData/PrayerData';

const PrayerDisplay = (props) => {
    const salahs = props.salah;
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr className="text-center">
                    <th>Date</th>
                    <th>Fojor</th>
                    <th>Juhor</th>
                    <th>Asor</th>
                    <th>Magrib</th>
                    <th>Esha</th>
                    <th>Tahajjud</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.salah.map(salah=> <PrayerData salah={salah}/>)
                }
               
            </tbody>
        </Table>
    );
};

export default PrayerDisplay;