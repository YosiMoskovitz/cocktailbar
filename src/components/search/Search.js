import React, { useState, useEffect, useRef} from 'react';
// import axios from 'axios';
import Item from './Item';
import data from './bituchimV1.json'

const INITIAL_STATE = {
    term: '',
};

// console.log(JSON.parse(cities))


const Search = () => {
    const [values, setValues] = useState(INITIAL_STATE);
    const [responseData, setResponseData] = useState({});
    const inputRef = useRef();

    useEffect(() => {
        if (values.term) {
            runSearch(values.term);
        }

    }, [values.term]);

    useEffect(() => {
        inputRef.current.focus();
    })


    const handelChange = (event) => {
        if (event.target.value === '') {
            
        }
        const { name, value } = event.target;
            setValues((prevState) => ({ ...prevState, [name]: value }))
    
    }

    const runSearch = (term) => {
        // axios
        //     .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
        //     .then((response) => {
        //         setResponseData(response.data)
        //     })
        //     .catch((error) => {
        //         console.log('Error', error)
        //     })
        // .finally(() =>{
        //     setValues(INITIAL_STATE)
        // })
        // data.map((city) => {    
        //     if (city.city === term) {
        //         return  setResponseData(city)
        //     }           
        // })


            var found = data.filter(city => {
                return city.city.startsWith(term)
            });
            
            if (found.length >=1) {
                setResponseData(found)
            }
            else  {
                found.push(data[0])
                setResponseData(found)
            }

    }

    const handelSubmit = (event) => {
        event.preventDefault();
        runSearch(values.term)
    }

    return (
        <>
            <form onSubmit={handelSubmit} className="search-form">
                <input
                    ref={inputRef}
                    type="text"
                    name="term"
                    className="search-input"
                    placeholder="חיפוש..."
                    autoComplete="off"
                    onChange={handelChange}
                    value={values.term} />
            </form>
            <pre>
               {/* <Item item={responseData} /> */}
               {responseData.length >=1 && 
            responseData.map((item) => <Item key={item._id.$oid} item={item} />)}
            </pre>
        </>
    )
}

export default Search
