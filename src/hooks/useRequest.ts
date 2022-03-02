import { useReducer } from 'react';

import {
  Action,
  ActionTypes,
  initialState,
  InitialState,
  reducer,
} from '@utils/reducers/useRequest';

type UseRequestParams = (params?: {
  customState?: Partial<InitialState>;
  customReducer?: (state: InitialState, action: Action) => InitialState;
  query?: () => Promise<any>;
}) => {
  response: InitialState;
  handlePerformRequest: (innerQuery?: () => Promise<any>) => Promise<any>;
  handleDispatchLoading: () => void;
  handleDispatchError: (error: any) => void;
  handleDispatchSuccess: (data: any) => void;
  handleDispatchReset: () => void;
};

const useRequest: UseRequestParams = ({
  customState = initialState,
  customReducer = reducer,
  query = () => Promise.resolve(),
} = {}) => {
  const mappedCustomState = { ...initialState, ...customState };
  const [state, dispatch] = useReducer(customReducer, { ...mappedCustomState });

  const handleDispatchLoading = () => dispatch({ type: ActionTypes.LOADING });

  const handleDispatchError = (error: any) => {
    dispatch({ type: ActionTypes.ERROR, payload: { error } });
  };

  const handleDispatchSuccess = (data: any) => {
    dispatch({ type: ActionTypes.SUCCESS, payload: { data } });
  };

  const handleDispatchReset = () => dispatch({ type: ActionTypes.RESET });

  const handlePerformRequest = async (innerQuery: typeof query = query) => {
    try {
      handleDispatchLoading();
      const data = await innerQuery();
      handleDispatchSuccess(data);
    } catch (error) {
      handleDispatchError(error);
    }
  };

  return {
    response: state,
    handlePerformRequest,
    handleDispatchLoading,
    handleDispatchError,
    handleDispatchSuccess,
    handleDispatchReset,
  };
};

export default useRequest;
