import React,{useEffect, useState, useRef} from "react";
import axios from "axios";
import MovieSlide from "./MovieSlide";
import {  FaArrowRight } from 'react-icons/fa';
import { useDraggable } from "react-use-draggable-scroll";

function Movie({title ,url}){

const [movies,getMovie] = useState([]);
const [page,setPage] =useState(1);  
const ref = useRef();             
const { events } = useDraggable(ref); 


 const fetchPopularMovies = async() => {
   const response = await axios.get(url+`&page=${page}`)
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
          <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -ml-2" {...events} ref={ref}>
                {movies.map((movie,i) => 
                    <MovieSlide movie={movie} key={i}/>
                )}
          </div>
          <p className="absolute right-0 mr-8 md:mr-5 mb-5 cursor-pointer text-orange-600" onClick={loadMore} >Add More...</p>
        </div>
      
    )

}

export default Movie;