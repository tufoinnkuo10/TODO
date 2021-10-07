//  FUNCTIONS FOR ADD AND REMOVE TODO
export const removeTodos = (something, id) => {
    if (something.index.toString() === id) {
      return false;
    }
    return true;
  };
  
  export const addTodo = (itemsArray, value) => {
    itemsArray.push({ completed: false, description: value, index: itemsArray.length + 1 });
  };  
