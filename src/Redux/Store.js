import {createStore,applyMiddleware,compose} from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./Reducers/index"
import {watcherSaga} from "./Sagas/WatcherSaga"
const SagaMiddelware = createSagaMiddleware()
const MiddleWare =[SagaMiddelware]
const store =
            compose(applyMiddleware(...MiddleWare),
               // window.__REDUX_DEVTOOLS_EXTENSION__ && 
               // window.__REDUX_DEVTOOLS_EXTENSION__()
                ) 
            (createStore)(rootReducer)

SagaMiddelware.run(watcherSaga)

export default  store


