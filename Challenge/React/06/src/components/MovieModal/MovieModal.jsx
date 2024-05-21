import './MovieModal.css';

const MovieModal = ({
    /*{...movieSelected} 객체에서 이미 분해 된 개별 속성 props로 받기*/
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    
    setModalOpen,
}) => {
    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                    <span
                        onClick={() => setModalOpen(false)}
                        className="modal-close"
                    >
                        X
                    </span>
                    <img
                        className="modal_poster-img"
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt="영화 포스터 이미지"
                    />
                    <div className="modal_content">
                        <p className="modal_details">
                            <span>
                                100% for you
                            </span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className="modal_title">
                            {title ? title : name}
                        </h2>
                        <p className="modal_overview">평점 : {vote_average}</p>
                        <p className="modal_overview">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;