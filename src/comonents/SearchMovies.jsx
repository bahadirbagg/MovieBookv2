import MovieCard from "./MovieCard";
import React,{useEffect, useState} from "react";
import axios from "axios";

function SearchMovies(query){

    const [movie,getMovie] = useState([]);
    const [page,setPage] =useState(1);  

    const fetchSearch = async() => {
 
        console.log("query içerde",query)
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US&query=${query.match.params.search}&page=${page}&include_adult=false`)
        console.log("search",response.data)
        getMovie(movies => [...movies, ...response.data.results])
      }
      


      useEffect(() => {
        fetchSearch()
      },[page,query])

      const loadMore = async () => {
        setPage(page+1)
      } 

    return(
      
      <div className="container mx-auto px-4 pt-16 pb-16">
        <div className="popular-movies">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
            {movie.map((movie,i) => 
              <MovieCard movies={movie} key={i}/>
            )}
          </div>
          <div className=" absolute mt-4 justify-center text-orange-600 cursor-pointer rounded-xl p-1 border-x-2 border-orange-600 hover:bg-orange-500 hover:text-black" onClick={loadMore}>View More</div>
        </div>
      </div>
    )

}

export default SearchMovies;