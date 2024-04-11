import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

class LoginPage extends Component {
  state = {
    username: '',
    password: '', 
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state
    return (
        <div>
        <Header/>
      <div className="login-container">
        <div>
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="label-form">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="Username"
              className="input-form"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="label-form">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              className="input-form"
              onChange={this.onChangePassword}
            />
            <div className="button-container">
            <Link className='link-item' to='/'>
              <button type="submit" className="login-button">
                Login
              </button>
              </Link>
            </div>
            <p className='location'>Don't have an account? <span className='span'>Sign Up</span></p>
          </form>
        </div>
      </div>
      </div>
    )
  }
}
export default LoginPage