import { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from '../api/axios.js';
import requests from '../api/requests.js';
import './banner.css'

const Banner = () => {

    const [movie, setMovie] = useState(null)
    const [click, setClick] = useState(false)
    
    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = async() => {
        //현재 상영중인 영화 정보 가져오기
        const response = await instance.get(requests.fetchNowPlaying)
        //여러 영화 중 한 영화의 ID 가져오기
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id

        //특정 영화의 더 상세한 정보를 가져오기
        const { data: movieDetail } = await instance.get(`movie/${movieId}`,
            { params: {append_to_response: "videos" },
        });
        setMovie(movieDetail)
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }

    if (!movie) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
    if(!click){
        return(
            <div
                className='banner'
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundPosition: `top center`,
                    backgroundSize: `cover`
                }}>
                <div className='banner__contents'>
                    <h1 className='banner__title'>
                        {movie.title || movie.name || movie.original_name}
                    </h1>
                    <div className='banner__buttons'>
                        {movie.videos?.results[0]?.key ?
                        <button className='banner__button play'
                        onClick={() => setClick(true)}>
                            Play
                        </button>
                        : null
                        }
                    </div>
                    <p className='banner_description'>
                        {truncate(movie.overview, 100)}
                    </p>
                </div>
                <div className='banner--fadeBottom'></div>
            </div>
        )
    } else {
        return(
            <>
            <Container>
                <HomeContainer>
                    <Iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?control=0&autoplay=1&mute=1}`}>

                    </Iframe>
                </HomeContainer>
            </Container>
            <button onClick={() => setClick(false)}>
                X
            </button>
            </>
        )
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

`


export default Banner;