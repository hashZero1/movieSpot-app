import AllShows from "./AllShows";
import axios from 'axios';
import SearchShow from "./SearchShowComponent";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Header from './Header'
export default function Home() {
    const [allShow, handleChange] = useState()
    const Base_URL = `https://api.tvmaze.com/shows`;
    useEffect(() =>{
        async function fetchShow(){
            try{
                const config = {headers: {Accept: 'application/json'}}
                const res = await axios.get(Base_URL,config)
                const {data} =res;
                handleChange(data)
            }catch(err){
                alert("Please Enter The Correct City Name")
            } 
        }
        fetchShow()
    },[] ) 


    return (
      <>
        <div className="bg-black">
            <Header />
      <SearchShow/>
      <div className='container m-auto mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {allShow && allShow.map(show => <AllShows key={show.id} show={show}/>
              )}
          </div>
      </div>
    
      </>
      )
    }