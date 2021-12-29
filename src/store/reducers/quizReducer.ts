import { IQuizItem } from '@/types/trivia';
import { handleActions } from 'redux-actions';
import actionTypes from '../actions';

interface IState {
  quizList: IQuizItem[];
}

const initialState: IState = {
  quizList: [],
};

const reducer = handleActions(
  {
    [actionTypes.QUIZ.SET_QUIZ]: (
      state: IState,
      action: {
        type: string;
        payload: { results: IQuizItem[] };
      }
    ) => {
      const {
        payload: { results },
      } = action;
      console.log(results);
      return {
        ...state,
        quizList: results,
      };
    },
  },
  initialState
);

export default reducer;
