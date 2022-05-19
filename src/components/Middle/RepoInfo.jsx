import React from 'react'
import './RepoInfo.css'

function RepoInfo() {
  return(
    <div>
      {/* Show only the info for the repo where 'active === true' */}
      <h2>Repo name: (name)</h2>
      <p>Last modified: (lastModified)</p>
      <p>Language: (language)</p>
      <p>Collaborators: </p>
      <ul>
        {/* Add collaborators as list items using JS */}
        


      </ul>
      <textarea placeholder="Start coding!">
      </textarea>
    </div>
  )
}

export default RepoInfo