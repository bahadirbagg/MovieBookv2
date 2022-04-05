import React,{useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";



function AllMovie(){

const [movies,getMovie] = useState([]);
const [page,setPage] =useState(1);  

console.log("page sayısı",page)

const fetchUpcomingMovies = async() => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US&page=${page}`)
  getMovie(movies => [...movies, ...response.data.results])
  }


useEffect(() => {
  console.log("use effect page sayısı",page)
      fetchUpcomingMovies()

},[page])


const loadMore = async () => {
  setPage(page+1)
}




    return(
      <div className="container mx-auto px-4 pt-16 pb-16">
        <div className="popular-movies">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movies?.map((movie,i) => 
              <MovieCard movies={movie} key={i}/>
            )}
          </div>
          <div className=" absolute   justify-center text-orange-600 cursor-pointer" onClick={loadMore}>View More</div>
        </div>
      </div>
    )

}

export default AllMovie;