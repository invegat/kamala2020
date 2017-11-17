//import React from 'react';
import { connect } from 'react-redux';
import Home from './Home'
import {getStories} from '../actions'
const mapStateToProps = (state) => {
    return {
      stories: state.stories
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchStories: () => dispatch(getStories())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps )(Home);


