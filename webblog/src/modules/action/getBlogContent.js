export const getBlogContent = title => {
  const URL = "http://localhost:9000/blog/read/";

  return dispatch => {
    fetch(URL + title)
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: "READ_BLOG",
          blogs: result.data
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_ERROR",
          error
        });
      });
  };
};
