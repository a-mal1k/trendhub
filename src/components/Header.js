import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom'
import $ from 'jquery'

function Header(props) {
   const [sideBar, setSideBar]=useState('closed')



   function setActive(){
    $('.listLink').on('click',function() {
        $('.listLink.activa').removeClass("activa");
        $(this).addClass("activa");
    });
 }
   const openCloseMenu = () => {
      if(sideBar === 'closed'){
        $('.topnav').addClass('response')
     setSideBar('open')
      }else{
        $('.topnav').removeClass('response')
        setSideBar('closed')
      }
  }
    return (
        <div className="wrapper" id="wrap">
        <nav className="navigation">
          <div className="menu"><i className="fa fa-bars" onClick={openCloseMenu}/></div>
          <div className="main-heading" id="name">
            <h1>Trend<span>Hub</span></h1>
          </div>
          <ul className="topnav" id="nav">
          <li className="listItem"><Link to="/Movies" className="listLink activa" onClick={setActive}>Movies</Link></li>
          <li className="listItem"><Link to="/Series" className="listLink" onClick={setActive}>Series</Link></li>
              <li>
                <DebounceInput
                element="input" 
                debounceTimeout={400} 
                type="text" 
                placeholder="Search..." 
                value={props.query}
                onChange={(event) => props.searchData(event.target.value)}/>
              </li>
          </ul>
        </nav>
      </div>
    )
}

export default Header
