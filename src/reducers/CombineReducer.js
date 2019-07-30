import { combineReducers} from 'redux';

import reducer1 from './Reducertest';
import reducer2 from './Reducertwo';

const rootReducer = combineReducers({reducer1,reducer2});

export default rootReducer;