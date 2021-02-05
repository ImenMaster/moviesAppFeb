export const GET_MOVIES_REQUESTED = "GET_MOVIES_REQUESTED";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILED ="GET_MOVIES_FAILED"

export const getMovies = () => ({
  type: GET_MOVIES_REQUESTED
});

export const SetMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies
});
 
export const getMoviesFailed = (error) => ({
  type: GET_MOVIES_FAILED,
  error
});

const initialState = {
  movies:[],
  looding:false,
  error: null,
};

export default function Movies (state = initialState, action) {
  switch (action.type) {

    case GET_MOVIES_REQUESTED:
    
    return {
    ...state,
    loading: true,
    }
    case GET_MOVIES_SUCCESS:
    
        return {
        ...state,
        loading: false,
        movies: action.movies
      }
      case GET_MOVIES_FAILED:

        return {
        ...state,
        loading: false,
        error: action.error,
      }

      default:
      return state;
  }
};

