import axios from "../../api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'


const DetailPage = () => {

    const { movieId } = useParams()
    const [ movie, setMovie ] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try {  
                const response = await axios.get(`/movie/${movieId}`)
                setMovie(response.data)
            } catch (err) {
                console.log(err)
                alert("영화 정보가 없습니다.")
            }
        }
        fetchData()
    }, [movieId])

    if (!movie) return null
    
    return (
        <section>
            <StyledImage
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
            style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div className="modal_content">
                <p className="modal_details">
                    {movie.release_date ? movie.release_date : movie.first_air_date}
                </p>
                <h2 className="modal_title">
                    {movie.title ? movie.title : movie.name}
                </h2>
                <p className="modal_overview">평점 : {movie.vote_average}</p>
                <p className="modal_overview">{movie.overview}</p>
            </div>
        </section>
    );
};

export default DetailPage;

const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
`