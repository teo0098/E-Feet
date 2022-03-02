export type InitialState = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
  data: any;
};

export enum ActionTypes {
  ERROR = 'ERROR',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  RESET = 'RESET',
}

export type Action =
  | { type: ActionTypes.ERROR; payload: { error: any } }
  | { type: ActionTypes.LOADING }
  | { type: ActionTypes.SUCCESS; payload: { data: any } }
  | { type: ActionTypes.RESET };

export const initialState: InitialState = {
  data: null,
  error: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const reducer = (state: InitialState, action: Action) => {
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
    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
