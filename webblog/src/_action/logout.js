import history from "../_helper/history";

export const logout = () => {
  return dispatch => {
    // remove user from local storage to log user out
    dispatch({ type: "USER_LOGOUT" });
    localStorage.removeItem("user");
    history.push("/login");
  };
};

export default logout;
