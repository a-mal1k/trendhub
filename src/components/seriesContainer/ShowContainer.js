import React from 'react';
import Show from './Show'


const ShowContainer = props => {

        return(
            <div className="movie-container">
                
                <div className="wrap">
                    {props.shows.map((show) => (
                    <Show
                        getInfo={props.getInfo}
                        key={show.id}
                        show={show}
                        setPage={props.setPage}
                    />
                    ))}
                    </div>
                </div>
        )
}

export default ShowContainer;