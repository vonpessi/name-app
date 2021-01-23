import React from 'react'

const TableView = (props) => {

    const { names } = props;



    return (
        <div >
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {names ? names.map(
                        (person, index) =>
                            <tr key={index}>
                                <td>{person.name}</td>
                                <td>{person.amount}</td>

                            </tr>
                    )
                        : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableView;