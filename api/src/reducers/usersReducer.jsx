import * as Actions from '../actions'

export default (state =[], action) => {
    //if (action.payload) console.log('libraries reducer action payload.data',action.payload.data)
    switch(action.type) {
        case Actions.GET_USERS:
            return action.payload.data
        default:
            return state
    }
}