import {
  FETCH_QUIZ_LIST,
  FETCH_QUIZ_LIST_ERROR,
  FETCH_QUIZ_LIST_SUCCESS,
} from "./constants";

const DEFAULT_STATE = {
  loading: false,
  errors: [],
  quizzes: [],
};

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_QUIZ_LIST: {
      return { ...state, loading: true, errors: [] };
    }
    case FETCH_QUIZ_LIST_SUCCESS: {
      const { quizzes = [] } = action;
      return { ...state, loading: false, quizzes };
    }
    case FETCH_QUIZ_LIST_ERROR: {
      const { errors = [] } = action;
      return { ...state, loading: false, errors };
    }
    default:
      return state;
  }
};
