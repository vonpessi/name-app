import React from 'react';

const ButtonView = (props) => {

    const { setDescending, setAlphabetical, totalAmount, findByName } = props;

    return (
        <div>
            <div className='button-container'>
                <div
                    onClick={setDescending}
                    className='button-card'>
                    Order by popularity
            </div>
                <div
                    onClick={setAlphabetical}
                    className='button-card'>
                    Order by alphatebical
            </div>

                <div className='total-amount-card'>
                    Total amount of all names
                    <h3>{totalAmount}</h3>
                </div>
            </div>
            <div className='button-card-search'>
                <input
                    className='search-input'
                    placeholder='Search by name...'
                    type='text'
                    onChange={(evt) => { findByName(evt.target.value); }} />
            </div>
        </div>

    )

}

export default ButtonView;

