import React from 'react';
import { Table } from 'react-bootstrap';

const PrayerDisplay = () => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr className="text-center">
                    <th>SL</th>
                    <th>Fojor</th>
                    <th>Juhor</th>
                    <th>Asor</th>
                    <th>Magrib</th>
                    <th>Esha</th>
                    <th>Tahajjud</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td>1</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Yes</td>
                </tr>
                <tr className="text-center">
                    <td>1</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Yes</td>
                </tr>
                <tr className="text-center">
                    <td>1</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Right Time</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default PrayerDisplay;