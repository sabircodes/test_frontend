// Searchinput.js
import React, { useContext } from 'react';
import { SearchContext } from '../../context/search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Searchinput = () => {
    const { values, setValues } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`/search/${values.keyword}`);
            setValues({ ...values, results: data });
            navigate(`/search/${values.keyword}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mx-4 px-2 py-3">
            <input
                type="text"
                placeholder="Search"
                value={values.keyword}
                onChange={(e) => setValues({ ...values, keyword: e.target.value })}
            />
            <button onClick={handleSubmit} className='bg-primary px-4 py-1 rounded-lg'>Search</button>
        </div>
    );
}

export default Searchinput;
