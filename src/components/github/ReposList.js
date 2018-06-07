import React from 'react'

// stateless component
const ReposList = props => {
  return (
    <ul>
      
      {props.repos.map(
        repo => (
          
          <li key={repo.id}>{repo.name} - <a href='{repo.url}'>{repo.url}</a></li>
        )
      )}
    </ul>
  )
}

export default ReposList