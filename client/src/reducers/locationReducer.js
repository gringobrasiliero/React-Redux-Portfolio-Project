import initialState from './initialState';
import {FETCH_LOCATION} from '../actions/location-actions'


export default (state = initialState.locations, action) => {
  switch(action.type) {

    case FETCH_LOCATION:
      return [ action.payload.results[0].address_components];

    default:
      return state
    }
}
