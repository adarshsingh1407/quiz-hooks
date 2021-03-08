import React from "react";
import Option from "./Option";

export default function Question(props) {
  const { activeQuestion, selectOption, goToNextQuestion } = props;
  const optionsAvailable = activeQuestion.options.split(",");

  return (
    <>
      <div className="row mt-4 py-3 bg-white rounded">
        <div className="col-12 question font-weight-bold">
          {activeQuestion.name}
        </div>
      </div>
      <div className="row my-3">
        {optionsAvailable.map((option, index) => (
          <Option
            key={option}
            index={index + 1}
            questionId={activeQuestion.id}
            option={option}
            selectOption={selectOption}
            goToNextQuestion={goToNextQuestion}
          />
        ))}
      </div>
    </>
  );
}
