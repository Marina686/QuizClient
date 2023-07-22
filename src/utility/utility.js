export function mapDbModelsToQuestions(dbModels) {
  const questions = [];

  let currentQuestion = null;

  for (const dbModel of dbModels) {
    const num = dbModel.num;
    const text = dbModel.text;

    if (dbModel.answer === "?") {
      // If the answer is "?", it is a new question
      currentQuestion = { num, text, options: [] };
      questions.push(currentQuestion);
    } else {
      // Otherwise, it is an option for the current question
      if (currentQuestion) {
        currentQuestion.options.push({ num: num.toFixed(1), text: dbModel.text });
      }
    }
  }

  return questions;
}


 