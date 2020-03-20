import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURFS = 'ADD_SMURFS';
export const REMOVE_SMURFS = 'REMOVE_SMURFS';
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"



export const getSmurfs = () => dispatch => {
    dispatch( {type: FETCH_START});
    
    axios.get('http://localhost:3333/smurfs').then( res => {
        console.log(res);
        dispatch({type: FETCH_SUCCESS, payload: res.data} );
    })
    .catch( err => {
        dispatch({type: FETCH_FAILURE, payload: err.response});
    })
};

export const addSmurfs = (smurf) => dispatch => {

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(response => {
            console.log(response)
            dispatch({
                type: ADDING_SMURF_SUCCESS,
                payload: response
            })
        })
        .catch(error => console.log(error))
}