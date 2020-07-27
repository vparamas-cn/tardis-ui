import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer , { rootSaga } from './reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    let persistor = persistStore(store)
    
    return { store, persistor }
}