import {
    combineReducers
} from 'redux';
import app from './app';
import auth from './auth';

const appReducer = combineReducers({
    app,
    auth,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;