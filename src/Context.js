import { createContext,useEffect,useState } from "react";
import useForm from "./Hooks/useForm";
import axios from "axios";

export const MovieContext = createContext()

export const MovieProvider = ({children}) =>{
    const [showName , handleChange] = useForm("");
    const [allShow, setAllShow] = useState()
    const URL = `https://api.tvmaze.com/shows`;
    //setting the show by showName
    const [show, setCity] = useState();
    const Base_URL = `https://api.tvmaze.com/singlesearch/shows?q=${showName}`;
    //search for show


    const searchCity = async () => {
        try{
            // const config = {headers: {Accept: 'application/json'}}
            const res = await axios.get(Base_URL)
            setCity(res.data)
        }catch(err){
            alert("Please Enter The Correct City Name")
        } 
    }

   
    useEffect(() =>{
        async function fetchShow(){
            try{
                const config = {headers: {Accept: 'application/json'}}
                const res = await axios.get(URL,config)
                const {data} =res;
                setAllShow(data)
            }catch(err){
                alert("Please Enter The Correct City Name")
            } 
        }
        fetchShow()
    },[] ) 

    const value = {searchCity,show,handleChange,showName,allShow}
    return (
        <MovieContext.Provider value={value}>
            {children}
            </MovieContext.Provider>
    )
}
