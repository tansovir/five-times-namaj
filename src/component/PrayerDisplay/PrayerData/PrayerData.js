import React from 'react';

const PrayerData = (props) => {
    console.log(props.salah);
    const {fojor,juhor, asor, magrib, esha, tahajjud, created_at} = props.salah;
    return (
        <tr className="text-center">
            <td>{created_at}</td>
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