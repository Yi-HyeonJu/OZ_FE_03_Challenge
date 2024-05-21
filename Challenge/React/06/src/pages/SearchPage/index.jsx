import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {

    const [searchResults, setSearchResults] = useState([])

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    const navigate = useNavigate()

    let query = useQuery()
    const searchTerm = query.get('q')

    useEffect(() => {
        if(searchTerm) {
            fetchSearchMoive(searchTerm)
        }
    }, [searchTerm])

    const fetchSearchMoive = async (searchTerm) => {
        try{
            const response = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            )
            setSearchResults(response.data.results)
        }   catch (error) {
            console.log(error)
        }
    }

    if(searchResults.length > 0){
        return (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if(movie.backdrop_path !== null && movie.media_type !== "perdon"){
                        const movieImageURL = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                        return (
                            <div className="movie" key={movie.id}>
                                <div
                                    onClick={() => navigate(`/${movie.id}`)}
                                    className="movie_column-poster"
                                >
                                    <img
                                        src={movieImageURL}
                                        alt="영화 이미지"
                                        className="movie_poster"
                                    />
                                </div>
                            </div>
                        )
                    
                    }
                })}
            </section>
        );
    } else {
        return (
            <section className="no-results">
                <div className="no-results_text">
                    <p>
                        {searchTerm} 검색어에 해당하는 영화가 없습니다. 
                    </p>
                </div>
            </section>
        )
    }

};

export default SearchPage;