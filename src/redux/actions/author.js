import { SET_AUTHOR_LOADING, SET_AUTHOR_DETAIL, ADD_BOOK, SET_ERRORS} from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchAuthorDetail = (authorID) => async (dispatch) => {
  dispatch({
    type: SET_AUTHOR_LOADING,
  });
  try {
    const res = await instance.get(`/api/authors/${authorID}/`);
    const author = res.data;
    dispatch({
      type: SET_AUTHOR_DETAIL,
      payload: author,
    });
  } catch (err) {}
};

//POST THE BOOK TO https://the-index-api.herokuapp.com/api/books/
export const postBook = (book, closeModal) => async (dispatch) => {
  try {
    const res = await instance.post("/api/books/", book);
    const newBook = res.data;
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
    closeModal();
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data,
    });
    
  }
};