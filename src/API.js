const API_KEY = "4eb490f3e0e767726c90fddf79671fa1";
export const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
const page = 1;
var date = new Date();

	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();
    var nextm = date.getMonth() + 2;
    var dateString = y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
	var nextMonth = y + '-' + (nextm <= 9 ? '0' + nextm : nextm) + '-' + (d <= 9 ? '0' + d : d);


const request = {
    getTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    getTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getUpcomingMovies: `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${dateString}&primary_release_date.lte=${nextMonth}&api_key=${API_KEY}`
   
}

export default request;