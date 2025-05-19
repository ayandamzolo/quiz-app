export default class QuizService {
  getAllQuestions() {
    return fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  /* getQuestionsByCategory(category) {
    return fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        return data.filter((question) => question.category === category);
      })
      .catch((error) => {
        throw new Error(error);
      });
  } */

  getQuestionsByCategories(categories) {
    return fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        return data.filter((question) =>
          categories.includes(question.category),
        );
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  getSettings() {
    return fetch("/api/quiz-settings")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}