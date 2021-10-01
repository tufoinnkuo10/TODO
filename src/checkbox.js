const taskCompleted = (e, items) => {
  const complete = e.target;
  items = [...JSON.parse(localStorage.getItem('items'))];
  if (complete.checked) {
    complete.parentElement.classList.add('completed');
    for (let i = 0; i < items.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = true;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  } else {
    complete.parentElement.classList.remove('completed');
    for (let i = 0; i < items.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (complete.parentNode.parentNode.id == items[i].id) {
        items[i].completed = false;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  }
};
// eslint-disable-next-line import/prefer-default-export
export { taskCompleted };
