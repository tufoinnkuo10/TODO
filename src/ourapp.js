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

export const clearCompletedTodos = (array) => {
  let resultArray = array;
  const todoArray = document.querySelectorAll('.todo-item');
  // console.log(todoArray.length);
  todoArray.forEach((div) => {
    const input = div.querySelector('input');
    if (input.checked) {
      div.remove();
      resultArray = array.filter((something) => {
        if (something.index.toString() === div.id) {
          return false;
        }
        return true;
      });
    }
  });
  return resultArray;
};