import axios from "axios";
import SmoothList from "react-smooth-list";
import React,{useEffect, useState} from "react";
import YouTube from 'react-youtube';
import { IMAGE_PATH } from "../API";
import {  FaPlayCircle } from 'react-icons/fa';

function MovieDetail(idm){
    const [movies,getMovie] = useState([]);
    const [video,getVideo] = useState([]);
    const [credit,getCredit] = useState([])
    const [active,setActive] = useState();
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);


const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
const back=`${BACKDROP_PATH + movies.backdrop_path}`


const fetchDetailMovies = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US`)
    const response2 = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}/credits?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US`)
    getMovie(response.data);
    getCredit(response2.data);
  }
const fetchVideo = async() => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${idm.match.params.id}/videos?api_key=4eb490f3e0e767726c90fddf79671fa1&language=en-US&language=en-US`)
    getVideo(response.data.results.find(vid => vid.name.includes('Trailer')));
}


useEffect(() => {
    fetchDetailMovies()
    fetchVideo()

    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
},[])


const renderTrailer = () => {

    if(deviceSize < 426)
        return(
            <YouTube videoId={video.key} opts={opts3}/>
        )
    if(deviceSize>426 && deviceSize < 666)
        return(
            <YouTube videoId={video.key} opts={opts2}/>
        )
    else{
        return(
            <YouTube videoId={video.key} opts={opts}/>
        )
    }
}


const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const opts2 = {
    height: '290',
    width: '440',
    playerVars: {
      autoplay: 1,
    },
  };
  const opts3 = {
    height: '190',
    width: '340',
    playerVars: {
      autoplay: 1,
    },
  };

  const styles = {
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }

    return(
        <div className="movie-details" >
                <div className="flex min-h-[calc(100vh-88px)]    bg-cover bg-center flex-col lg:flex-row justify-center items-center"
                style={{  
                backgroundImage:`url("${back}")`,    
                    }} >
                    <div className="flex p-16  flex-col lg:flex-row bg-inherit justify-center items-center" style={styles.content}>
                        <div className="flex justify-center items-center" >
                            <img src={IMAGE_PATH + movies.poster_path} alt={movies.original_title} width={300}/>
                                <FaPlayCircle color="white" fontSize={50} onClick={() => setActive(true)} className="absolute cursor-pointer" />
                        </div>
                        <div className="mt-5 md:flex md:justify-center md:items-center lg:mt-0 lg:ml-10" >
                            {active === true && renderTrailer()}
                        </div>
                        <div className="sm:mt-10 lg:w-[400px] inline-flex flex-col  lg:top-0 lg:mt-0 lg:ml-10  justify-center">
                            <SmoothList delay={200}>
                                <h1 className="text-base md:text-4xl font-bold text-white">{movies.title}</h1>
                                <p className="text-xs  md:text-sm mt-5 font-bold text-white">GENRE: <span className="font-bold text-base  text-orange-600">{movies.genres?.map((genre) => genre.name).join(", ")}</span></p>
                                <p className="text-xs md:text-sm mt-2 font-bold text-white">STARS: <span className="font-bold text-base text-orange-600">{credit.cast?.slice(0, 3).map((actor) => actor.name).join(", ")}</span></p>
                                <p className="text-sm md:text-xl text-justify mt-3 text-white"> {movies.overview}</p>
                            </SmoothList>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default MovieDetail;