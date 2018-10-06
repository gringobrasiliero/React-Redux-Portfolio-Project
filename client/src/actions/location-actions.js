import dotenv from 'dotenv'
dotenv.config()
export const FETCH_LOCATION = 'FETCH_LOCATION';
const mapsApiKey = process.env.REACT_APP_KEY;

export const fetchLocation = (latitude, longitude) => {
return (dispatch) => {

  fetch("http://maps.googleapis.com/maps/api/geocode/json?latlng="+ latitude + "," + longitude +"&sensor=false&key=" +  mapsApiKey)
    .then(res => res.json())
    .then(location => {
      dispatch({
        type: FETCH_LOCATION,
        payload: location
      })
    })
}
}
