import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'
import { fetchUserInfo } from '../../service/user-api'
import ReposList from './ReposList'
import UserInfo from './UserInfo'

// stateful
class ReposContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      user: {},
      username: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount() {

  }

  changeHandler(ev) {
    // console.log('ok')
    this.setState({username: ev.target.value})
  }

  submitHandler(ev) {
    ev.preventDefault()
    fetchRepos(this.state.username)
      .then(res => this.setState({
        repos: res.data
    }))
    fetchUserInfo(this.state.username)
      .then(
        res => this.setState({
        //https://stackoverflow.com/questions/38824349/convert-object-to-array-in-javascript/44790922
        //user: Object.values(res.data)
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
        // user: Array.of(res.data)
        user: res.data
    }))
  }

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.submitHandler}>
        <input 
          onChange={this.changeHandler}
          type="search" 
          placeholder="user + ENTER"
          style={{width: '250px'}}  
        />
        </form>
        <h1><UserInfo user={this.state.user}></UserInfo> repos</h1>
        <ReposList repos={this.state.repos}></ReposList>
      </div>
    )
  }
}

export default ReposContainer