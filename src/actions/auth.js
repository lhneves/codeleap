import * as types from "../redux/types";

export function login(payload) {
  return {
    type: types.LOGIN,
    payload,
  };
}

export function logout(payload) {
  return {
    type: types.LOGOUT,
    payload,
  };
}
