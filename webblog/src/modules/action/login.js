import history from "../../helper/history";
import { userServices } from "../../modules/services";

export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    userServices
      .login(email, password)
      .then(user => {
        if (!user) {
          dispatch({
            type: "ALERT_ERROR",
            message: "wrong username or password"
          });
        } else {
          dispatch({ type: "USER_LOGIN_SUCCESS", user });
          history.push("/dashboard");
        }
      })
      .catch(error => {
        dispatch({ type: "ALERT_ERROR", error });
      });
  };
};
