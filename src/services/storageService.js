const KEY = "history";

export const saveHistory = (value) => {
  const history = JSON.parse(localStorage.getItem(KEY)) || [];

  history.unshift(value);

  localStorage.setItem(KEY, JSON.stringify(history.slice(0, 5)));
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};
