import Movie from "./Movie"
import Slider from "./Slider"
import api from "../API";

function Home() {


  return (
      <div>
        <Slider/>
        <Movie title='Trending' url={api.getTrending}/>
        <Movie title='Top Rated' url={api.getTopRated}/>
        <Movie title='Action Movies' url={api.getActionMovies}/>
        <Movie title='Horror Movies' url={api.getHorrorMovies}/>
        <Movie title='Comedy Movies' url={api.getComedyMovies}/>
        <Movie title='Romance Movies' url={api.getRomanceMovies}/>
      </div>
       
  ) 
}

export default Home;
