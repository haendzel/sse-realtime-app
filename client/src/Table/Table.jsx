import React from 'react';
import './Table.scss'

const Table = (props) => {

    const { texts } = props;

    return (

        <div className="col-xl-8 offset-xl-2">

            <table className="stats-table mt-4 mt-xl-5">
            <thead>
                <tr>
                <th>Author</th>
                <th>Text</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                texts.map((text, i) =>
                    <tr key={i}>
                    <td className='td-author'>{text.author}</td>
                    <td className='td-info'>{text.info}</td>
                    <td className='td-image'>
                        <div className='bg-image' style={{backgroundImage: `url(${text.image})`}}></div>
                    </td>
                    </tr>
                )
                }
            </tbody>
            </table>

        </div>

    )

}

export default Table;