import React from "react";
import {Link} from "react-router-dom"
import {IMAGE_PATH} from "../API"

function MovieCard2({movies}){

  
    return(
        <div className="relative overflow-hidden"    >
            <Link to={`/details/${movies.id}`}>
                <img src={IMAGE_PATH + (movies.poster_path?movies.poster_path:movies.backdrop_path)} alt={movies.original_title} className="border-2  border-gray-600 rounded-[30px] hover:opacity-40 transition ease-in-out duration-150"/>
            </Link>
            <div className="absolute top-0 right-0 px-2 py-2">
                <div className="text-[8px] sm:text-xs sm:ml-4 md:text-sm lg:text-base opacity-70 bg-orange-400 font-bold rounded-xl p-1 text-gray-700">Release Date:  {movies.release_date}</div>
	        </div>
            <div className="mt-2">
                <p className=" text-sm sm:text-sm md:text-lg  lg:text-2xl mt-2 text-white hover:text-gray:300">{movies.title}</p>
            </div>
        </div>

            
    )
}

export default MovieCard2;