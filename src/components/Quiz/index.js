import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import ErrorAlert from "../ErrorAlert";
import Loading from "../Loading";
import Question from "../../containers/Quiz/Question";
import QuizResult from "../../containers/Quiz/QuizResult";
import QuizTimer from "./QuizTimer";
import { FETCH_QUIZ_DETAILS } from "../../constants/labels";

function Quiz(props) {
  const { quiz, fetchQuizDetail, checkQuizComplete } = props;
  const {
    quizDetail,
    quizResponses,
    activeQuestionId,
    loading,
    errors,
    showResult,
  } = quiz;
  const activeQuestion =
    quizResponses.find((qr) => qr.id === activeQuestionId) || {};
  const { id } = useParams();

  useEffect(() => {
    fetchQuizDetail(id);
  }, [fetchQuizDetail, id]);

  if (showResult) {
    return <QuizResult />;
  }
  return (
    <div className="container">
      {loading && <Loading msg={FETCH_QUIZ_DETAILS} />}
      {!isEmpty(errors) && <ErrorAlert errors={errors} />}
      {!isEmpty(quizDetail) && (
        <>
          <div className="row quiz-detail-name rounded">
            <div className="col-12">
              <h2 className="text-center">{quizDetail.name}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {!isEmpty(activeQuestion) && (
                <>
                  <QuizTimer
                    activeQuestion={activeQuestion}
                    quizResponses={quizResponses}
                    checkQuizComplete={checkQuizComplete}
                  />
                  <Question
                    quizResponses={quizResponses}
                    activeQuestion={activeQuestion}
                    checkQuizComplete={checkQuizComplete}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
