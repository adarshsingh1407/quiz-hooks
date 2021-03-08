import React from "react";
import { isEmpty } from "lodash";
import ErrorAlert from "../ErrorAlert";
import Loading from "../Loading";
import QuizResultTable from "./QuizResultTable";
import { FETCHING_QUIZ_RESULT, YOUR_SCORE } from "../../constants/labels";

export default function QuizResult(props) {
  const { quiz } = props;
  const { quizDetail, quizResult, quizResultLoading, quizResultErrors } = quiz;
  return (
    <div className="container">
      {!isEmpty(quizDetail) && (
        <>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">{quizDetail.name}</h2>
            </div>
          </div>
          {quizResultLoading && <Loading msg={FETCHING_QUIZ_RESULT} />}
          {!isEmpty(quizResultErrors) && (
            <ErrorAlert errors={quizResultErrors} />
          )}
          {!isEmpty(quizResult) && (
            <>
              <div className="row">
                <div className="col-12">
                  <h1 className="score text-center">{`${YOUR_SCORE} ${quizResult.score}`}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <QuizResultTable
                    quizResult={quizResult}
                    quizDetail={quizDetail}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
