import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actionCreaters from '../store/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreaters, dispatch);
};
