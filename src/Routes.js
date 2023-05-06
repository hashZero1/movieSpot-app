import {Routes, Route} from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import AllShows from './Components/AllShows';
import SinglePage from './Components/SingleTvPage';
import SearchShow from './Components/SearchShowComponent';


export default function Routers(){

    return (
        <Routes>
            <Route path='/' element={<SearchShow/>}>
            <Route index element={<MainComponent/>}/>
            <Route path='search/:name' element={<SinglePage/>}/>
            </Route>
     </Routes>
    )
}