import axios from 'axios';
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const fetchData = ()=>{
    return(dispatch)=>{
        dispatch({type: FETCH_SMURFS_START})
        axios
            .get('/smurfs')
            .then((res)=>{
                dispatch({type: FETCH_SMURFS_SUCCESS, PAYLOAD: res.data})
            })
            .catch((err)=>{
                dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message})
            })
    }
}

export const addSmurf=(smurf)=>{
    if (!smurf){
        return {
            type: ADD_SMURF_FAILURE,
        }
    } else {
        return{
            type: ADD_SMURF, payload: smurf,
        }
    }
}

export const addSmurfFailure=(message)=>{
    return{
        type: ADD_SMURF_FAILURE, payload: message,
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.