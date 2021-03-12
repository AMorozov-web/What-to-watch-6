import {combineReducers} from 'redux';
import {data} from './reducers/data/data';
import {filter} from './reducers/filter/filter';
import {user} from './reducers/user/user';

const NameSpace = {
  DATA: `DATA`,
  FILTER: `FILTER`,
  USER: `USER`
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
  [NameSpace.USER]: user,
});

export {rootReducer};
