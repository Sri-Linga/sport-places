import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer, { ISportPlacesReducer } from '../reducers/';
import rootSaga from '../Saga/';

/**
 * Configure the store
 */
const configureStore = (): Store<ISportPlacesReducer> => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, thunk));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
