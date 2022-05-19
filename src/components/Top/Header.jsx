import React from 'react'
import './Header.css'

function Header() {


  function recentlyLogged() {
    // ****** Create a function that returns true 
    // if the user's lastLogin was within the last 
    // 24 hours or false otherwise. ******

    
  }



  return (
    <header>
    
      {/* Edit the line below to use props in place of (Bilbo Baggins) */}
      <h2>Hi (Bilbo Baggins), {recentlyLogged() ? "welcome back!": "we missed you."}</h2>
    </header>
  )
}

export default Header