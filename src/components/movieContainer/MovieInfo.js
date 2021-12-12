import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header';
const api = 'https://api.themoviedb.org/3'
const apiKey = '6c75544a6c3ee0c12e06c0346584513d'

function MovieInfo() {
    const [movieState, setMovieState] = useState([]);
    let movieId = sessionStorage.getItem('movieId');
    let page = sessionStorage.getItem('Page');
    let url = `${api}/${page}/${movieId}?api_key=${apiKey}`
    useEffect(() => {
        let mov = movieState
        fetch(url)
            .then((response) => {
                response.json().then((data) => {
                    let info;
                    if (response.status === 200) {
                        info = {
                            tagline: data.tagline,
                            poster: data.poster_path,
                            genres: data.genres,
                            title: data.title,
                            name: data.name,
                            status: data.status,
                            overview: data.overview,
                            rating: data.vote_average,
                            companies: data.production_companies,
                            release: data.release_date,
                            startSeries: data.first_air_date,
                            background: data.backdrop_path,
                            runtime: data.runtime,
                            episodeRuntime: data.episode_run_time,
                            homepage: data.homepage
                        }
                    } else {
                        info = { name: "Sorry couldn't retrieve any data" }
                    }
                    console.log(info)
                    mov.push(info)
                    setMovieState(mov)
                    console.log(movieState)
                })
            }).catch(err => {
                console.log("Eror while fetching data")
            })
    }, []);

    let poster, title, name, tagline, overview, genres, companies, release, background, runtime, status, homepage, rating, startSeries, episodeRuntime
    movieState.map((info) => (
        title = info.title,
        name = info.name,
        tagline = info.tagline,
        overview = info.overview,
        runtime = info.runtime,
        episodeRuntime = info.episodeRuntime,
        status = info.status,
        homepage = info.homepage,
        rating = info.rating,
        startSeries = info.startSeries,
        genres = info.genres.map((genre) => (
            genre.name
        )).join(', '),
        companies = info.companies.map((company) => (
            company.name
        )).join(', '),
        release = info.release,
        background = `https://image.tmdb.org/t/p/original${info.background}`,
        poster = `https://image.tmdb.org/t/p/w500${info.poster}`
    ))
    const styles = { width: '100%', backgroundImage: background ? (`url(${background})`) : null }
    return (
        <div>
            <section style={styles} className="infoSection ">
                <div className="outer-container">
                    <div className="container-box">
                        <div className="infoBox">
                            <div className="poster">
                                <img src={poster} />
                            </div>
                            <div className="info">
                                <div className="movie-name"><h1>{title}{name}</h1></div>

                                <div className="overview">
                                    <h2>{tagline}</h2>
                                    <p>{overview}</p>
                                </div>

                                <div className="genres-companies">
                                    <h2>{genres}</h2>
                                    <p>{companies}</p>
                                </div>

                                <div className="detail-container">
                                    <div className="column">
                                        <div className="details">
                                            <h3>Original Release</h3>
                                            <h2>{release}{startSeries}</h2>
                                        </div>
                                        <div className="details">
                                            <h3>Status</h3>
                                            <h2>{status}</h2>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="details">
                                            <h3>Running Time</h3>
                                            <h2>{runtime}{episodeRuntime} min</h2>
                                        </div>
                                        <div className="details">
                                            <h3>Vote Average</h3>
                                            <h2>{rating}/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="links">
                                    <div className="li"><Link className="link" to="/">Movies</Link></div>
                                    <div className="li"><Link className="link" to="/TvShows" >Tv Shows</Link></div>
                                    <div className="li"><a className="link" href={homepage} target="_blank">View More Details</a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MovieInfo
