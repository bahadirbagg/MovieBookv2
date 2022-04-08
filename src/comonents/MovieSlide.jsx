import React from "react";
import {Link} from "react-router-dom"

function MovieSlide({movie}){

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
    
    return(
        <Link to={`/details/${movie.id}`}>
            <div className="flex min-w-[80px] min-h-[50px] sm:min-w-[150px] sm:min-h-[90px] md:min-w-[330px] md:min-h-[210px]
                rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px]
              border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    <img src={BACKDROP_PATH + movie.backdrop_path} alt={movie.name} width={330} height={210}
                        className="rounded-lg object-cover"/>
            </div>
        </Link>
    )

}

export default MovieSlide;