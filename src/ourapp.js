//  FUNCTIONS FOR ADD AND REMOVE TODO

export const removeTodos = (something, id) => {
  if (something.index.toString() === id) {
    return false;
  }
  return true;
};

export const addTodo = (itemsArray, value) => {
  itemsArray.push({ completed: false, description: value, index: itemsArray.length + 1 });

  return itemsArray;
};

export const editTodo = (itemsArray, id, newValue) => {
  itemsArray.forEach((item) => {
    if (item.index.toString() === id) {
      item.description = newValue;
    }
  });
};

export const updateCompleted = (item, input) => {
  item.completed = input.checked;
};