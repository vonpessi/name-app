import React, { useEffect, useState } from 'react';
import ButtonView from './ButtownView';
import SearchedView from './SearchedView';
import TableView from './TableView';


const NameController = () => {

    const [names, setNames] = useState();
    const [totalAmount, setTotalAmount] = useState();
    const [searchedName, setSearchedName] = useState();

    useEffect(() => {

        if (!names) {
            getNames()
        }

        if (names && !totalAmount) {
            calculateTotalAmountOfNames()
        }
    })

    const orderByDescendingAmount = () => {

        const orderedDataByAmount = [].concat(names)
            .sort((a, b) => (b.amount - a.amount))

        console.log('descending amount', orderedDataByAmount)

        setNames(orderedDataByAmount)
    }

    const orderByAlphabetical = () => {

        const orderedDataByAlphabetically = [].concat(names)
            .sort((a, b) => a.name.localeCompare(b.name));

        console.log('alpbabetically', orderedDataByAlphabetically)
        setNames(orderedDataByAlphabetically)

    }

    const calculateTotalAmountOfNames = () => {

        const totalAmount = names.map(item => item.amount)
            .reduce((a, b) => a + b, 0);

        setTotalAmount(totalAmount)

    }

    const findByName = (props) => {

        if (props.length) {

            // capitalizing first letter and lowercase the rest
            const name = props.charAt(0).toUpperCase() + props.slice(1).toLowerCase();

            const foundName = names.filter(item => item.name.startsWith(name));

            setSearchedName(foundName)
            console.log('Found names', foundName)
        }
        else {
            setSearchedName('')
        }
    }


    const getNames = async () => {

        fetch("http://localhost:8000/names")
            .then(res => res.text())
            .then(res => setNames(JSON.parse(res)));

        return {};
    }

    return (
        <div className='main-container'>
            <div className='table-view-container'>
                {names ?
                    <TableView
                        names={names} />
                    : null}
            </div>
            <ButtonView
                setDescending={orderByDescendingAmount}
                setAlphabetical={orderByAlphabetical}
                totalAmount={totalAmount}
                findByName={findByName} />

            {searchedName ? searchedName.map(
                (person, index) =>
                    <SearchedView
                        person={person}
                        key={index} />
            )
                : null
            }
        </div>
    )
}

export default NameController;
