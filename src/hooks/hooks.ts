import { useDispatch } from 'react-redux';

const useDispatchAction = () => {
  const dispatch = useDispatch();

  const dispatchAction = (actionCreator: (arg1: any, arg2: any, arg3: any) => any, arg1?: any, arg2?: any, arg3?: any) => {
    const action = actionCreator(arg1, arg2, arg3);
    dispatch(action);
  };

  return { dispatchAction };
};

export default useDispatchAction;
