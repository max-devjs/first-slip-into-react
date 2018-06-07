import React from 'react'

const UserInfo = props => {
  // console.log(props)
  return (
    <em>
    {props.user.public_repos}
    </em>
  )
}

export default UserInfo