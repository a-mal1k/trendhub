import React from 'react'
import { Link } from 'react-router-dom';

function Movie(props) {
    const { movie } = props;
    let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const movieSelected =(id) =>{
        sessionStorage.setItem('movieId', id);
        return false;
        }

    const styles = { width: '100%', height: '100%', backgroundImage: poster ? (`url(${poster})`) : null }
    return (
        <div>
            <Link to="/MovieInfo" className="infoLink">
                <div className="movie-item" onClick={(event) => { movieSelected(movie.id); props.setPage() }} >
                    <div className="movie-cover" style={styles}>
                        <div><h6 className="badge bg-light text-dark">{movie.vote_average}{' '}<span className={(Math.floor(movie.vote_average)<=5)?"text-danger":"text-primary"}><i className="fas fa-star"></i></span></h6></div>
                    </div>
                    <div className="text-container">
                        <h6>{movie.title}{movie.name}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Movie
