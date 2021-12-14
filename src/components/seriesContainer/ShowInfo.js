import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Fallback from '../Fallback';
const api = 'https://api.themoviedb.org/3'
const apiKey = '6c75544a6c3ee0c12e06c0346584513d'

class ShowInfo extends Component{
    
    state = {
        showInfo:[]
    }

    componentDidMount(){
        const {showInfo} = this.state
        let movieId = sessionStorage.getItem('showId');
        let page = sessionStorage.getItem('Page');
         let url
         url = `${api}/${page}/${movieId}?api_key=${apiKey}&append_to_response=credits`
        
         fetch(url)
         .then((response) => {
             response.json().then((data) => {
             let info
             if (response.status === 200) {
                
             info = {
                tagline: data.tagline,
                poster: data.poster_path,
                genres: data.genres,
                title: data.title,
                name:data.name,
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
            }else{
                info={name: "Sorry couldn't retrieve any data"}
            }
             showInfo.push(info)
             this.setState({showInfo})
         })
        })
    }
        render(){
            const {showInfo} = this.state
        if(showInfo.length<1){
            return <Fallback/>
        } else{
        return (
        showInfo.map((info, id) =>{
           return (
        <div key={id}>
            <section style={{ width: '100%', backgroundImage: `url(${`https://image.tmdb.org/t/p/original${info.background}`})` }} className="infoSection ">
                <div className="outer-container">
                    <div className="container-box">
                        <div className="infoBox">
                            <div className="poster">
                                <img src={`https://image.tmdb.org/t/p/w500${info.poster}`} alt={info.tagline}/>
                            </div>
                            <div className="info">
                                <div className="movie-name"><h1>{info.title}{info.name}</h1></div>

                                <div className="overview">
                                    <h2>{info.tagline}</h2>
                                    <p>{info.overview}</p>
                                </div>

                                <div className="genres-companies">
                                    <h2>{info.genres.map((genre) => (genre.name)).join(', ')}</h2>
                                    <p>{info.companies.map((company) => (company.name)).join(', ')}</p>
                                </div>

                                <div className="detail-container">
                                    <div className="column">
                                        <div className="details">
                                            <h3>Original Release</h3>
                                            <h2>{info.release}{info.startSeries}</h2>
                                        </div>
                                        <div className="details">
                                            <h3>Status</h3>
                                            <h2>{info.status}</h2>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="details">
                                            <h3>Running Time</h3>
                                            <h2>{info.runtime}{info.episodeRuntime} min</h2>
                                        </div>
                                        <div className="details">
                                            <h3>Vote Average</h3>
                                            <h2>{info.rating}/10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="links">
                                    <div className="li"><Link className="link" to="/">Movies</Link></div>
                                    <div className="li"><Link className="link" to="/TvShows" >Tv Shows</Link></div>
                                    <div className="li"><a className="link" href={info.homepage} target="_blank" rel="noreferrer">View More Details</a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
           )
    })
    )   
}
}
}

export default ShowInfo
