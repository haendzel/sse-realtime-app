import React from 'react';
import './Table.scss'

const Table = (props) => {

    const { texts } = props;

    return (

        <table className="stats-table mt-4 mt-xl-5">
        <thead>
            <tr>
            <th>Fact</th>
            <th>Source</th>
            <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {
            texts.map((text, i) =>
                <tr key={i}>
                <td>{text.info}</td>
                <td>{text.source}</td>
                <td><img height="300"  src={text.image} alt={text.info} /></td>
                </tr>
            )
            }
        </tbody>
        </table>

    )

}

export default Table;