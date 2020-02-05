export const increment = params => {
  return {
    type: "INCREMENT",
    payload: params
  };
};

export const decrement = params => {
  return {
    type: "DECREMENT",
    payload: params
  };
};
