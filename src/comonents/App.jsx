import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MovieDetail from "./MovieDetail";
import Home from "./Home";
import Header from "./Header";
import UpcomingMovies from "./UpcomingMovies";
import SearchMovies from "./SearchMovies";
import AllMovie from "./AllMovie";

function App() {


  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>  
          <Route path="/AllMovies" exact component={AllMovie}/>  
          <Route path="/search/:search" component={SearchMovies}/>
          <Route path="/details/:id" exact component={MovieDetail}/>
          <Route path="/UpcomingMovies" exact component={UpcomingMovies}/>
        </Switch>

    </Router>
    
  ) 
}

export default App;
