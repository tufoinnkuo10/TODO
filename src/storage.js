const setStorage = (list) => {
  localStorage.setItem('todos', JSON.stringify(list));
};

const getStorage = () => {
  const newArray = [];
  if (localStorage.getItem('todos')) {
    const parsed = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < parsed.length; i += 1) {
      newArray.push(parsed[i]);
    }
  }
  return newArray;
};
export { setStorage };
export { getStorage };