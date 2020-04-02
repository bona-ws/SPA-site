let initialState = {
  isLoaded: false,
  error: null,
  blogs: null
};

export const getBlog = (state = initialState, action) => {
  switch (action.type) {
    case "BLOG_LISTS":
      return {
        isLoaded: true,
        blogs: action.blogs
      };
    case "READ_BLOG":
      return {
        isLoaded: true,
        blogs: action.blogs
      };
    case "FETCH_ERROR":
      return {
        isLoaded: true,
        blogs: null,
        error: action.error
      };
    default:
      return state;
  }
};
