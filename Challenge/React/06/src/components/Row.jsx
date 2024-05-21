/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from 'react';
import './Row.css';
import axios from '../api/axios';
import MovieModal from './MovieModal/MovieModal';

const Row = ({title, id, fetchUrl}) => {

    const [movies, setMovies] = useState([])

    const fetchMovieData = useCallback(async () => {
        const response = await axios.get(fetchUrl)
        setMovies(response.data.results)
    }, [fetchUrl])

    useEffect(() => {
        fetchMovieData()
    }, [fetchMovieData])
    
    const [modalOpen, setModalOpen] = useState(false)
    const [movieSelected, setMovieSelected] = useState({})

    const handleClick = (movie) => {
        setModalOpen(true)
        setMovieSelected(movie)
    }

    return (
        <div>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider_arrow-left'>
                    <span className='arrow' onClick={
                        () => {document.getElementById(id).scrollLeft -= window.innerWidth -80;
                            }}
                        >
                        {"<"}</span>
                </div>
                <div id={id} className='row_posters'>
                    {movies.map((movie) => {
                        return(
                            <img
                            key={movie.id}
                            className='row_poster'
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                            />
                        )
                    })}
                </div>
                <div className='slider_arrow-right'>   
                    <span className='arrow' onClick={
                        () => {document.getElementById(id).scrollLeft += window.innerWidth -80;
                            }}
                        >
                        {">"}</span>
                </div>
            </div>

                {modalOpen ? 
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                : null}

        </div>
    );
};

export default Row;