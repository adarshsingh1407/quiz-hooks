import React, { useEffect, useState } from "react";
import { REFRESH_RATE, TIME_LIMIT } from "../../constants";
import { SECONDS, TIME_REMAINING } from "../../constants/labels";
import { formatDuration } from "../../constants/utils";

export default function QuizTimer(props) {
  const [, updateTimerId] = useState(0);
  const { activeQuestion, quizResponses, checkQuizComplete } = props;
  const { endTime } = activeQuestion;
  const currentTS = new Date().getTime();
  const timeRemaining = endTime - currentTS;
  const percentTimeRemaining = Math.round((timeRemaining / TIME_LIMIT) * 100);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining < 0) {
        checkQuizComplete({
          quizResponses,
          questionId: activeQuestion.id,
          option: "",
        });
      }
      updateTimerId(timer);
    }, REFRESH_RATE);
    return () => clearInterval(timer);
  }, [timeRemaining, quizResponses, activeQuestion.id, checkQuizComplete]);
  return (
    <div className="row rounded bg-white">
      <div className="col-12 py-2">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${percentTimeRemaining}%` }}
          />
        </div>
      </div>
      <div className="col-12 time-bar">
        {`${TIME_REMAINING}: ${formatDuration(timeRemaining)}/
        ${formatDuration(TIME_LIMIT)} ${SECONDS}`}
      </div>
    </div>
  );
}
