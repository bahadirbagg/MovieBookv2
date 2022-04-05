import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieSlide from "./MovieSlide";
import MovieCard from "./MovieCard";

function Movie({title ,url}){

const [movies,getMovie] = useState([]);
const [page,setPage] =useState(1);  



 const fetchPopularMovies = async() => {
   const response = await axios.get(url+`&page=${page}`)
   console.log(url)
   getMovie(movies => [...movies, ...response.data.results])
   return response;

 }
const loadMore = async () => {
    setPage(page+1)
}


useEffect(() => {
  fetchPopularMovies()
},[page])


    
    return(
        <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400] mx-auto" >
          <h2 className="font-semibold md:text-xl text-orange-600" >{title}</h2>
          <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -ml-2">
                {movies.map((movie,i) => 
                    <MovieSlide movie={movie} key={i}/>
                )}
                <div className=" absolute right-0 mr-5 mt-[90px] text-orange-600 cursor-pointer" onClick={loadMore}>--></div>  
          </div>
        </div>
      
    )

}

export default Movie;