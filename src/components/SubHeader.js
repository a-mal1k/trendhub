import React from 'react'

function SubHeader(props) {
    return (
        <section className="subheader">
            <div className="genre-container">
                <ul className="list">
                    <div className="suggestion"><h4><i className="fa fa-greater-than text-dark"></i></h4></div>
                    <li className="" onClick={(event) => props.upcoming(event.target.value)}>Upcoming</li>
                <li className="" onClick={(event) => props.nowPlaying(event.target.value)}>Cinema</li>
                <li className="" onClick={(event) => props.mostPopular(event.target.value)}>Popular</li>
                <li className="" onClick={(event) => props.kidsPopular(event.target.value)}>Kids</li>
                <li className="" onClick={(event) => props.topRated(event.target.value)}>Top Rated</li>
                </ul>
            </div>
        </section>
    )
}

export default SubHeader
