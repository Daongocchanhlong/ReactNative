import {createStore} from 'redux';
import Reducer from './Reducers/moveReducer'

const store = createStore(Reducer);

export default store;