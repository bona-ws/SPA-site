export const increment = number => {
  return {
    type: "INCREMENT",
    payload: {
      count: number,
      message: "bertambah"
    }
  };
};

export const decrement = number => {
  return {
    type: "DECREMENT",
    payload: {
      count: number,
      message: "berkurang"
    }
  };
};
