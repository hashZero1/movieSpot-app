import React ,{useState} from 'react'
import axios from 'axios';
import useForm from '../Hooks/useForm';
import SinglePage from './SingleTvPage';

function SearchShow(){
    //custom hook to controll form input
    const [showName , handleChange] = useForm("");
    //setting the city by showName
    const [city, setCity] = useState()
    const Base_URL = `https://api.tvmaze.com/singlesearch/shows?q=${showName}`;
    //search for city
    const searchCity = async () => {
        try{
            // const config = {headers: {Accept: 'application/json'}}
            const res = await axios.get(Base_URL)
            setCity(res.data)
        }catch(err){
            alert("Please Enter The Correct City Name")
        } 
    }
  
    return(
        
        <form  onSubmit={(e) => {e.preventDefault()}}>
        <div className="relative max-w-5xl mt-6 mb-10 m-auto ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={showName} onChange={handleChange} type="search" id="search" className="block w-full p-4 pl-10 focus:outline-none text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-100   dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search for City" required/>
        <button onClick={() => searchCity()} className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800">Search</button>
        </div>
        {city?
        <SinglePage show={city}/>
        : null }
        </form>
    
    )
}

export default SearchShow;

