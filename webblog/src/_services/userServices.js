export const userServices = {
  login
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };
  return fetch("http://localhost:9000/login", requestOptions)
    .then(handleResponse)
    .then(user => {
      //save user session data using localStorage
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        localStorage.removeItem("user");
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
