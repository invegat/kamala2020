import React, { Component } from 'react';
// import storiesData from './StoriesData';
import Story from './Story';
// import storiesData from './storiesData.json'
import '../index.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }
  componentDidMount() {
    const stories = this.props.fetchStories();
    // storiesData.forEach(story => {
    //   stories.push(story);
    // });
    this.setState(
      {
        stories
      },
      () => {} //console.log('stories:', this.state.stories.length)
    );
  }
  render() {
    //if (this.state.stories.length === 0) {
    //  return <div />;
    //}  Heroku
    //console.log('render stories:', this.state.stories.length)
    const stories = this.props.stories.map(story => {
      return (
        <li key={story.a} className='none'>
          <Story key={story.a} text={story.text} url={story.url} a={story.a}/>
        </li>
      );
    });

    //const stories = <li key='1'> <Story text={this.state.stories[0].text} url={this.state.stories[0].url} /></li>
    //  console.log('stories:',stories)
    return (
      <div>
        <h2 className='warning'>Clicked Links Open in a New Tab</h2>
        <ul>{stories}</ul>
      </div>
    );
  }
}
