import React from 'react'
import { Link } from 'react-router-dom';

function Show(props) {
    const { show } = props;
    let poster = `https://image.tmdb.org/t/p/w500${show.poster_path}`

    const showSelected =(id) =>{
        sessionStorage.setItem('showId', id);
        return false;
        }

    const styles = { width: '100%', height: '100%', backgroundImage: poster ? (`url(${poster})`) : null }
    return (
        <div>
            <Link to="/ShowInfo" className="infoLink">
                <div className="movie-item" onClick={(event) => { showSelected(show.id); props.setPage() }} >
                    <div className="movie-cover" style={styles}>
                        <div><h6 className="badge bg-light text-dark">{show.vote_average}{' '}<span className={(Math.floor(show.vote_average)<=5)?"text-danger":"text-primary"}><i className="fas fa-star"></i></span></h6></div>
                    </div>
                    <div className="text-container">
                        <h6>{show.title}{show.name}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Show
