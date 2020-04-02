export const getBlogLists = categoryName => {
  const URL = "http://localhost:9000/blogs/";
  const category = categoryName || "";

  return dispatch => {
    fetch(URL + category)
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: "BLOG_LISTS",
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
