import history from "../../helper/history";
import { userServices } from "../../modules/services";

export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    userServices
      .login(email, password)
      .then(user => {
        if (!user) {
          dispatch({ type: "USER_LOGIN_FAILURE" });
          history.push("/login");
        } else {
          dispatch({ type: "USER_LOGIN_SUCCESS", user });
          history.push("/dashboard");
        }
      })
      .catch(error => {
        dispatch({ type: "USER_LOGIN_FAILURE", error });
        history.push("/login");
      });
  };
};
