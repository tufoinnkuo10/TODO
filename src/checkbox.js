const taskCompleted = (e, items) => {
  const complete = e.target;
  if (complete.checked) {
    complete.parentElement.classList.add('completed');
  
    for (let i = 0; i < items.length; i++) {
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = true;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  } else {
    complete.parentElement.classList.remove('completed');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (complete.parentNode.id == items[i].id) {
        items[i].completed = false;
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  }
};
export { taskCompleted };
