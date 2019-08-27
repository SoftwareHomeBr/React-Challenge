import { API_ERRORED } from "../constants/action-types";

const forbiddenWords = ["spam", "Trump", "bitcoin", "sex"];
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === API_ERRORED) {
        alert("Deu um erro:" + action.payload.errored);
      }       
      if (action.type === 'DATA_REQUESTED') {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.authorName.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_AUTHOR" });
        }
      }
      return next(action);
    };
  };
}