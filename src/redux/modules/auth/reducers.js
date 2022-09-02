import * as types from "../../types";

const initialState = {
  isLoggedIn: true,
  user: '',
};

export default function reducer(state = initialState, action){
  switch (action.type) {
    case types.LOGIN: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGOUT: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
}
}