import React, {useState} from 'react';
import axios from 'axios';
import Item from './Item';

const INITIAL_STATE = {
    term: '',
};


const Search = () => {
    const [values, setValues] = useState(INITIAL_STATE);
    const [responseData, setResponseData] = useState({})

    const handelChange = (event) => {
        const {name, value} = event.target;
        setValues((prevState) => ({...prevState, [name]: value}))
    }
    
    const runSearch = (term) => {
        axios
        .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        .then((response) =>{
            setResponseData(response.data)
        })
        .catch((error) => {
            console.log('Error', error)
        })
        .finally(() =>{
            setValues(INITIAL_STATE)
        })
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        runSearch(values.term)
    }

    return (
        <>
        <form onSubmit={handelSubmit} className="search-form">
            <input type="text" name="term" className="search-input" placeholder="Search..."
            onChange={handelChange}
            value={values.term}/>
        </form>
        <pre>
            {responseData.drinks && 
            responseData.drinks.slice(0, 3).map((item) => <Item key={item.idDrink} item={item} />)}
        </pre>
        </>
    )
}

export default Search
