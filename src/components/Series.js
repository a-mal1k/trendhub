import React, {useEffect} from 'react'
import Header from './Header'

function Series() {

    useEffect(() => {
    console.log("i am in series")
    }, [])
    return (
        <div>
             <Header/>
            I am series.
        </div>
    )
}

export default Series
