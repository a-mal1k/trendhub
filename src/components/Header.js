import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom'

function Header(props) {
   const [sideBar, setSideBar]=useState('closed')
   const openCloseMenu = () => {
    let ul = document.querySelector('.topnav')
      if(sideBar === 'closed'){
      ul.classList.add('response');
     setSideBar('open')
      }else{
        ul.classList.remove('response');
        setSideBar('closed')
      }
  }
    return (
        <header className="header">
        <div className="wrapper" id="wrap">
        <nav className="navigation">
          <div className="menu"><i className="fa fa-bars" onClick={openCloseMenu}/></div>
          <div className="main-heading" id="name">
            <h1>Trend<span>Hub</span></h1>
          </div>
          <ul className="topnav" id="nav">
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/Series">Series</Link></li>
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
    </header>
    )
}

export default Header
