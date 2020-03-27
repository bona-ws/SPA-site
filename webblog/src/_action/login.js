import history from "../_helper/history";

// export const loginAction = {
//   login
// };

// function login(email, password) {
//   return dispatch => {
//     const user = { email, password };
//     dispatch({ type: "USER_LOGIN_REQUEST", user });
//     history.push("/admin");
//   };
// }

export const login = (email, password) => {
  return dispatch => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, password })
    // };
    // return fetch(`/users/authenticate`, requestOptions)
    //   .then(handleResponse)
    //   .then(user => {
    //     localStorage.setItem("user", JSON.stringify(user));
    //     return user;
    //   })
    //   .then(
    //     user => {
    //       const user = { email, password };
    //       dispatch({ type: "USER_LOGIN_REQUEST", user });
    //       history.push("/");
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    const user = { email, password };
    dispatch({ type: "USER_LOGIN_SUCCESS", user });
    localStorage.setItem("user", JSON.stringify(user));
    // return user;
    history.push("/admin");
  };
};
