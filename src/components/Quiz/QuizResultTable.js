import React from "react";
import {
  ANSWERS,
  CORRECT_ANSWER,
  QUESTION,
  YOUR_ANSWER,
} from "../../constants/labels";

export default function QuizResultTable(props) {
  const { quizResult, quizDetail } = props;
  return (
    <div className="row">
      <div className="col-12 table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                {ANSWERS}
              </th>
            </tr>
          </thead>
          <tbody>
            {quizDetail.questions.map((question, quesIndex) => {
              const index = quesIndex + 1;
              const selectedQuizResult = quizResult.questions.find(
                (q) => q.ques_id === question.id
              );
              return (
                <tr key={question.id}>
                  <td className="bg-white">
                    <div className="row">
                      <div
                        className={`col-12 question-${index}`}
                      >{`${QUESTION}: ${question.name}`}</div>
                      <div className={`col-12 submitted-answer-${index}`}>
                        {`${YOUR_ANSWER}: ${selectedQuizResult.submitted_option}`}
                      </div>
                      <div className={`col-12 correct-answer-${index}`}>
                        {`${CORRECT_ANSWER}: ${selectedQuizResult.correct_option}`}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
