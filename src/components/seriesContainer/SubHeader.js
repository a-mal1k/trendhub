import React, {useEffect} from 'react'
import $ from 'jquery'

function SubHeader(props) {

   const handleClick = () =>{
       $('.lost').toggleClass('list').slideToggle()
   }
   useEffect(() => {
       setActive()
   }, []);
   
 function setActive(){
    $('.listItem').on('click',function() {
        $('.listItem.active').removeClass("active");
        $(this).addClass("active");
    });
 }
   

    return (
        <section className="subheader">
            <button className="btn btn-outline-light m-2" onClick={handleClick}><i className="fa fa-greater-than"></i></button>
            <div className="genre-container">
                <ul className="lost">
                <li className="listItem active"onClick={(event) => props.mostPopular(event.target.value)}>Popular</li>
                <li className="listItem"onClick={(event) => props.latest(event.target.value)}>Latest</li>
                <li className="listItem"onClick={(event) => props.topRated(event.target.value)}>Top Rated</li>
                </ul>
            </div>
        </section>
    )
}

export default SubHeader
