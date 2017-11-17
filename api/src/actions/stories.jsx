import axios from 'axios';
import {GET_STORY, GET_STORIES} from './index'

export const getStories = () => {
    const promise = axios.get('http://localhost:5001/stories'); 
  return {
    type: GET_STORIES,
    payload: promise
  };
};
export const getStory = (name) => {
   console.log('getStory name:', name)
    const promise = axios.get('http://localhost:5001/stories/'+name.substring(1))
    return {
        type: GET_STORY,
        payload: promise
      };
};
