import { combineReducers } from 'redux';
import { cockpitReducer } from './cockpitReducer';

const rootReducer = combineReducers({
    cockpit : cockpitReducer,
});

export default rootReducer;
