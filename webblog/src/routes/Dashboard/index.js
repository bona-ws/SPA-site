import React, { Component } from "react"
import { connect } from "react-redux"

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSession: this.props.user.data
    }
  }

  componentDidMount() {
    this.setState({})
  }

  render() {
    const { userSession } = this.state

    return (
      <div>
        {userSession.map(user => (
          <h1 key={user.id}>Hello, {user.username}</h1>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
})

export default connect(mapStateToProps)(Dashboard)
