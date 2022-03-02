import { useReducer } from 'react';

type InitialState = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
  data: any;
};

enum ActionTypes {
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
}

type Action =
  | { type: ActionTypes.ERROR; payload: { error: any } }
  | { type: ActionTypes.LOADING }
  | { type: ActionTypes.SUCCESS; payload: { data: any } };

const initialState: InitialState = {
  data: null,
  error: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload.error,
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null,
      };
    case ActionTypes.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: null,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

const useRequest = (query: () => Promise<any> = () => Promise.resolve()) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDispatchLoading = () => dispatch({ type: ActionTypes.LOADING });

  const handleDispatchError = (error: any) => {
    dispatch({ type: ActionTypes.ERROR, payload: { error } });
  };

  const handleDispatchSuccess = (data: any) => {
    dispatch({ type: ActionTypes.SUCCESS, payload: { data } });
  };

  const handlePerformRequest = async (innerQuery: typeof query = query) => {
    try {
      handleDispatchLoading();
      const data = await innerQuery();
      handleDispatchSuccess(data);
    } catch (error) {
      handleDispatchError(error);
    }
  };

  return { response: state, handlePerformRequest };
};

export default useRequest;
