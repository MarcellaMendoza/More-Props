import React from 'react'
import './LeftBar.css'
import RepoBar from './RepoBar'

function LeftBar() {
  return(
    <div className="main">
    
    {/* Modify the code below to use some kind of loop */}
    {/* using the RepoBar component (pass props to it) */}
    {/* Your LeftBar should end up looking like what's */}
    {/* rendered from the code below: */}
      <RepoBar />
      <RepoBar />
      <RepoBar />
    </div>
  )
}

export default LeftBar