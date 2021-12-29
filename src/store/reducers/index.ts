import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  quizReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
