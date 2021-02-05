
/* 2- call our request and return data*/
import { call, put } from "redux-saga/effects";
import { SetMoviesSuccess,getMoviesFailed} from "../../Reducers/Movies";
import { requestGetMovies } from "../Requests/Movies";

export function* handleGetMovies(action) {
  try {
    const response = yield call(requestGetMovies);
    const { data } = response;
    yield put(SetMoviesSuccess(data));
  } catch (error) {
 
    yield put(getMoviesFailed(error.message));

  }
}