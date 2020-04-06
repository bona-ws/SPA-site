export const alert = (state = {}, action) => {
  switch (action.type) {
    case "ALERT_SUCCESS":
      return {
        severity: "success",
        message: action.message
      };
    case "ALERT_ERROR":
      return {
        severity: "error",
        message: action.message
      };
    case "ALERT_CLEAR":
      return {};
    default:
      return state;
  }
};
