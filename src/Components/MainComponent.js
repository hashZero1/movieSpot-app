import AllShows from "./AllShows";
import { useContext } from "react";
import { MovieContext } from "../Context";

export default function MainComponents() {
    const {allShow} = useContext(MovieContext)
    return (
      <>
        <div className="bg-black">
      <div className='container m-auto mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {allShow && allShow.map(show => <AllShows key={show.id} show={show}/>
              )}
          </div>
      </div>
      </>
      )
    }