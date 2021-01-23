import React from 'react'

const SearchedView = (props) => {

    const { person } = props;

    return (
        <div>
            <p>Found <span className='searched-view-red-colored-text'> {person.amount} </span> 
            person which name is <span className='searched-view-red-colored-text'> {person.name}</span>
            </p>
        </div>
    )
    
}

export default SearchedView;
