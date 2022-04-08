import React,{useState} from "react";
import {Link , useHistory} from "react-router-dom"
import { FaSearch } from 'react-icons/fa';

function Header(){

const [query,setQuery] = useState('');
const history = useHistory();

const searchText = (event) => {
    setQuery(event.target.value);
    if (event.charCode === 13) {
        history.push(`/search/${query}`);
      }
}



    return(
        <nav className="sticky bg-slate-800 top-0 z-[1000] flex items-center px-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-1 py-3 md:px-4 md:py-6 text-gray-400">
                <ul className="flex flex-col md:flex-row items-center">
                    <li>
                        <Link to="/">
                            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Movie
                                <span className="text-orange-500">Book</span>
                            </p>
                        </Link>    
                    </li>
                    <li className="mt-2 text-xs md:text-base md:ml-28 md:mt-0 md:mb-0 md:flex-col   text-white  rounded-md ">
                        <Link to="/UpcomingMovies">
                            <p className="opacity-50 hover:opacity-100 hover:shadow-2xl">Upcoming Movies</p>
                        </Link>
                    </li>
                    <li className="mt-1 text-xs mb-1 md:text-base md:ml-28 md:mt-0 md:mb-0 md:flex-col   text-white  rounded-md ">
                        <Link to="/AllMovies">
                            <p className="opacity-50 hover:opacity-100 hover:shadow-2xl">Movies</p>
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-col md:flex-row md:ml-7 items-center">

                    <input type="text" value={query} onChange={searchText.bind(this)} onKeyPress={searchText.bind(this)}  autoComplete="new-password" className="w-48 text-xs rounded-full md:text-base md:w-64 px-4 py-1 border-2 border-gray-600 bg-gray-800" placeholder="Search" />
                </div>
            </div>
        </nav>
    )
}

export default Header;