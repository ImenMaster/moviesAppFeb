import { takeLatest } from "redux-saga/effects";
import { handleGetMovies} from "./Handlers/Movies";
import { GET_MOVIES_REQUESTED} from "../Reducers/Movies";

export default function* WatcherGetMovies() {

/* Connect Action with HandleGetMovies  function */

yield takeLatest(GET_MOVIES_REQUESTED,handleGetMovies)



  }
