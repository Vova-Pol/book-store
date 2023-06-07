import { ACTION_TYPES } from '../types';
import { sendGetRequest } from '../../utils/utils';
import { BOOKS_URL } from '../../utils/constants';
import { Dispatch } from 'redux';

export const getBooksList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES.GET_BOOKS_SEND_REQ });

      const { books } = await sendGetRequest(BOOKS_URL);

      dispatch({ type: ACTION_TYPES.GET_BOOKS_SUCCESS, payload: books });
    } catch (err: any) {
      dispatch({ type: ACTION_TYPES.GET_BOOKS_ERROR, payload: err.message });
    }
  };
};
