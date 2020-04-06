export const registration = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { registering: true };

    case "REGISTER_SUCCESS":
      return {};

    default:
      break;
  }
};
