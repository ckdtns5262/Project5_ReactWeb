import React from 'react'

function Navbar() {
  return ( 
    <nav>
    <div className="nav_logo">
        <p>My Logo</p>
    </div>
    <ul className="nav_menu">
        <li><a href="1">HTML</a></li>
        <li><a href="2">CSS</a></li>
        <li><a href="3">JavaScript</a></li>
        <li><a href="4">React</a></li>
    </ul>
    
    <ul className="nav_icon">
        <li className=""><i className="fa-brands fa-square-facebook"></i></li>
        <li className=""><i className="fa-brands fa-square-instagram"></i></li>
    </ul>
 
</nav>
   );
}

export default Navbar;