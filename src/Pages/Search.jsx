import React, { useContext } from 'react'
import { SearchContext } from '../../context/search'
import { baseURL } from '../../url';

const Search = () => {
    const { values, setValues } = useContext(SearchContext);

  return (
    <div>
        <div>
            <h1 className='text-2xl  font-semibold text-center'>Search Results</h1>
            <h3 className='text-lg text-gray-400 font-thin text-center'>{values?.results.length < 1 ? 'No Product found' : `Found ${values?.results.length}`}</h3>
            <div className="grid grid-cols-3 gap-2 px-4 py-2 ">
            {values.results.map(cloth => (
                            <div key={cloth._id} className='max-w-sm mt-8 px-4 py-2'>
                                <div className='flex flex-col items-center border border-black rounded-xl bg-gray-950 shadow-lg shadow-gray-900 px-4 py-3  '>
                                    <div><img className='object-cover' src={cloth.photos} /></div>
                                    <div className='sm:text-sm sm:font-extralight lg:text-xl lg:font-normal '>{cloth.name}</div>
                                </div>



                            </div>
                        ))
            }
            </div>
        </div>
    </div>
  )
}

export default Search
