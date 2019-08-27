// src/js/reducers/index.js
import { API_ERRORED } from "../constants/action-types";
const initialState = {
  articles: [],
  remoteArticles: [],
  remoteUsers: [],
  requestUserPost: [],
  authorName: '',
  pagenum: 0,
  errored: []
};
function rootReducer(state = initialState, action) {
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles = action.payload
    });
  } else
  if (action.type === "USERS_LOADED") {
    return Object.assign({}, state, {
      remoteUsers: state.remoteUsers = action.payload
    });
  } else
  if (action.type === "DATA_REQUESTED") {
    return Object.assign({}, state, {
      requestUserPost: state.requestUserPost = action.payload.id,
      authorName: state.authorName = action.payload.authorName,
      pagenum: state.pagenum = 0
    });
  } else
  if (action.type === "PAGE_REQUESTED") {
    let pn = state.pagenum;
    pn += action.payload;    
    return Object.assign({}, state, {
      pagenum:  (pn >=0 && pn <=3) ? state.pagenum = pn : state.pagenum
    });
  } else
  if (action.type === API_ERRORED) {
    return Object.assign({}, state, {
      errored: state.errored = action.payload
    });
  }
  return state;
}
export default rootReducer;