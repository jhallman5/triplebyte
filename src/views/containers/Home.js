import React from 'react'
import { connect } from 'react-redux'
import { initialAction } from '../actions/initial'

class Home extends React.Component {
  render(){
    return (
      <div>
        <section className='hero is-info'>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hello World
              </h1>
            </div>
          </div>
        </section >
        <button onClick={this.props.initialAction}>Test Redux</button>
        <div>The initial store state is {this.props.initial}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    initial: state.initialReducer.initial
   }
};

const mapDispatchToProps = dispatch => {
  return {
    initialAction: () => dispatch(initialAction())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
