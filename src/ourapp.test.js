import {
  addTodo,
  removeTodos,
  editTodo,
} from './ourapp.js';

describe(' add an item to To-Do-List', () => {
  test('Test addToDo function', () => {
    // Arrange
    let givenArr = [1, 2, 3, 4];

    // Act
    givenArr = addTodo(givenArr, 'Added to the listli');

    // Assert
    const latestElement = givenArr[givenArr.length - 1];
    expect(givenArr).toHaveLength(5);
    expect(latestElement.completed).toBe(false);
    expect(latestElement.description).toBe('Added to the listli');
    expect(latestElement.index).toBe(givenArr.length);
  });
});

describe('remove an item from the To-Do-List', () => {
  test('Test removeTodos function', () => {
    // Arrange
    const itemtodo = { index: 3 };
    const id = '3';
    // Act
    const result = removeTodos(itemtodo, id);
    // Assert
    expect(result).toBe(false);
  });
});

describe('Edit existing items test', () => {
  test('Todo edit function', () => {
    const takenArr = [{ index: 2, description: 'push in this' }];
    const id2 = '2';
    const newestItem = 'push this in';

    editTodo(takenArr, id2, newestItem);

    expect(takenArr[0].description).toBe('push this in');
  });
});