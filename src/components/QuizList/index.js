import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import QuizListItem from "./QuizListItem";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { FETCHING_QUIZZES_MSG, WELCOME_MSG } from "../../constants/labels";

function QuizList(props) {
  const { quizList, fetchQuizList } = props;
  const { quizzes, loading, errors } = quizList;
  useEffect(() => {
    fetchQuizList();
  }, [fetchQuizList]);
  return (
    <div className="container">
      <h1 className="text-center">{WELCOME_MSG}</h1>
      <div className="row">
        {quizzes.map((quiz, index) => (
          <div key={quiz.id} className="col-12 my-2">
            <QuizListItem index={index + 1} quiz={quiz} />
          </div>
        ))}
      </div>
      {loading && <Loading msg={FETCHING_QUIZZES_MSG} />}
      {!isEmpty(errors) && <ErrorAlert errors={errors} />}
    </div>
  );
}

QuizList.propTypes = {
  fetchQuizList: PropTypes.func.isRequired,
};

export default QuizList;
