import {
  addTodo,
  removeTodos,
} from './ourapp.js';

describe(' add an item to To-Do-List', () => {
  test('Test addToDo function', () => {
    // Arrange
    const givenArr = [1];

    // Act
    addTodo(givenArr, 'Added to the listli');

    // Assert
    const firstElement = givenArr[1];
    expect(givenArr).toHaveLength(2);
    expect(firstElement.completed).toBe(false);
    expect(firstElement.description).toBe('Added to the listli');
    expect(firstElement.index).toBe(2);
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