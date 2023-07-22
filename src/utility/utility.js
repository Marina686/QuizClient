export function mapDbModelsToQuestions(dbModels) {
  const questions = [];
  let currentQuestion = null;

  for (const dbModel of dbModels) {
    if (!dbModel.hasOwnProperty('Num') || isNaN(dbModel.Num)) {
      // Skip this dbModel if it doesn't have the 'Num' property or if 'Num' is not a number
      continue;
    }

    // Check if the question for the current dbModel is not created yet
    if (!currentQuestion || currentQuestion.text !== dbModel.Text) {
      currentQuestion = {
        text: dbModel.Text,
        options: [],
      };
      questions.push(currentQuestion);
    }

    // Append the option (1.1, 1.2, etc.) to the options array
    currentQuestion.options.push(dbModel.Num.toFixed(1));
  }

  console.log("Questions array:", questions); // Add this line to log the questions array

  return questions;
}