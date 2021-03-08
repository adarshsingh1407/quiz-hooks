import { TIME_LIMIT } from "../../constants";

export const getQuizResponsesFromQuestions = (questions = []) => {
  const currentTS = new Date().getTime();
  return questions.map((q, i) => ({
    ...q,
    startTime: i === 0 ? currentTS : 0,
    endTime: i === 0 ? currentTS + TIME_LIMIT : 0,
    elapsedTime: 0,
    submittedOption: "",
  }));
};

export const setQuizTimestampsOnStart = (quizResponse) => {
  const currentTS = new Date().getTime();
  quizResponse.startTime = currentTS;
  quizResponse.startTime = currentTS + TIME_LIMIT;
  return { ...quizResponse };
};

export const getAnswerMapping = (quizId, quizResponse) => ({
  quiz_id: quizId,
  mappings: quizResponse.map((qr) => ({
    ques_id: qr.id,
    submitted_option: qr.submittedOption,
  })),
});
