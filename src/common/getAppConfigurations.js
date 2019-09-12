import routes from "../router";
import {createStore, applyMiddleware} from "redux";
import {mainReducer, mainSaga} from "../redux";
import createSagaMiddleware from 'redux-saga';


const getAppConfigurations = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        mainReducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(mainSaga);

    return {
        routes,
        store
    }
};

export default getAppConfigurations;
