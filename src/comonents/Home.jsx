import Movie from "./Movie"
import Slider from "./Slider"
import api from "../API";

function Home() {


  return (
      <div>
        <Slider/>
        <Movie title='Trending' url={api.getTrending}/>
        <Movie title='TopRated' url={api.getTopRated}/>
        <Movie title='ActionMovies' url={api.getActionMovies}/>
        <Movie title='HorrorMovies' url={api.getHorrorMovies}/>
        <Movie title='ComedyMovies' url={api.getComedyMovies}/>
        <Movie title='RomanceMovies' url={api.getRomanceMovies}/>
      </div>
       
  ) 
}

export default Home;
