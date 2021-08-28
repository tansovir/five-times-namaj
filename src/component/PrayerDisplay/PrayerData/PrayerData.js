import React from 'react';
import moment from 'moment'

const PrayerData = (props) => {
    const {fojor,juhor, asor, magrib, esha, tahajjud, created_at} = props.salah;
    return (
        <tr className="text-center">
            {/* <td>{moment(created_at.toDate())}</td> */}
            <td>{moment(created_at).calendar()}</td>
            <td>{fojor}</td>
            <td>{juhor}</td>
            <td>{asor}</td>
            <td>{magrib}</td>
            <td>{esha}</td>
            <td>{tahajjud}</td>
        </tr>
    );
};

export default PrayerData;