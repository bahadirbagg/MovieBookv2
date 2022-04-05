import React,{useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import api, {BACKDROP_PATH} from "../API";
import axios from "axios";

function Slider(){

const [movies,getMovie] = useState([]);

 const fetchPopularMovies = async() => {
   const response = await axios.get(api.getTrending)
   getMovie(response.data.results)
 }

useEffect(() => {
  fetchPopularMovies()
},[])

    
    return(
        <div className="flex shadow-2xl mx-auto justify-items-center">
            <Carousel autoPlay infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} interval={5000}> 
                {movies.map((movie,i) => 
                        <div className="lg:w-[600] lg:h-[600px]">
                            <img src={BACKDROP_PATH + movie.backdrop_path} alt={movie.original_title} key={i} className="object-cover"/>
                        </div>
                )}
            </Carousel>
        </div>
    )

}

export default Slider;