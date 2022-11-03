import {
    GETSEARCHEDVALUE,
  GET_ALL_RECEIPS_FAILED,
  GET_ALL_RECEIPS_SUCCESS,
  GET_ONE_RECEIPS_FAILED,
  GET_ONE_RECEIPS_SUCCESS,
  LOADING,
} from "./receipConst";

const initstate = {
  list: [],
  loading: true,
  error: null,
  rDetails: {},
  serachedvalue:"chiken"
};
export const receipReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_ALL_RECEIPS_SUCCESS:
      return { ...state, loading: false, list: payload };
    case GET_ALL_RECEIPS_FAILED:
        case GET_ONE_RECEIPS_FAILED:
      return { ...state, loading: false, error: payload };
    case GET_ONE_RECEIPS_SUCCESS:
      return { ...state, loading: false, rDetails: payload };
    case GETSEARCHEDVALUE:
        return {...state,serachedvalue:payload}
    default:
      return state;
  }
};
