import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard2 from "./MovieCard2";
import api from "../API";



function UpcomingMovies(){

const [movies,getMovie] = useState([]);
const [page,setPage] =useState(1);  

 const fetchUpcomingMovies = async() => {
  const response = await axios.get(api.getUpcomingMovies+`&page=${page}`)
   console.log(response.data.results)
  getMovie(movies => [...movies, ...response.data.results])
}
console.log(api.getUpcomingMovies+`&page${page}`)

useEffect(() => {
    fetchUpcomingMovies()
},[page])

const loadMore = async () => {
  setPage(page+1)
}

    return(
      <div className="container mx-auto px-4 pt-16 pb-16">
        <div className="popular-movies">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies.map((movie,i) =>  (
              movies.poster_path ===null || movies.backdrop_path ===null ?  
                null : (<MovieCard2 movies={movie} key={i}/>)
              
            ))}
          </div>
          <div className=" absolute mt-4 justify-center text-orange-600 cursor-pointer rounded-xl p-1   border-x-2 border-orange-600" onClick={loadMore}>View More</div>
        </div>
      </div>
    )

}

export default UpcomingMovies;