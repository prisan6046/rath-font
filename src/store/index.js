import { createStore , combineReducers , applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const Profile = {
    User : [],
    number_project : []
};

export const reducerProfile = (state = Profile , action ) => {
    switch(action.type){
        case 'Profile':
            state.User.push(action.payload)
            break;
    }
    return state

}


let rootReducer = combineReducers({
    name : reducerProfile
})


export default createStore( rootReducer , applyMiddleware(logger , thunk) )
