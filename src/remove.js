import taskCompleted from './checkbox.js';

const addTask = (e, items, input, itemsContainer, Item) => {
  if (!input.value) {
    return;
  }

  items = [...JSON.parse(localStorage.getItem('items'))];
  if (e.keyCode === 13) {
    const newItem = new Item();
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const p = document.createElement('input');
    const icon = document.createElement('i');
    div.classList.add('task');

    newItem.description = input.value;
    newItem.id = items.length + 1;
    newItem.completed = false;

    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', taskCompleted);

    p.value = input.value;
    p.type = 'text';
    p.setAttribute('readonly', 'readonly');

    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(icon);

    itemsContainer.appendChild(div);

    input.value = '';
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload();
  }
};

const removeTasks = (e, items) => {
  items = [...JSON.parse(localStorage.getItem('items'))];
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const { id: currentId } = checkbox.parentElement.parentElement;
      items = items.filter((item) => item.id.toString() !== currentId);
      // console.log('new items: ', items);
      checkbox.parentElement.parentElement.remove();
    }
  });

  items.forEach((item, idx) => {
    console.log('itme: ', item);
    item.id = idx + 1;
  });
  document.querySelectorAll('input[type="checkbox"]').forEach((elem, idx) => {
    console.log('elem: ', elem.parentElement.parentElement);
    elem.parentElement.parentElement.id = idx + 1;
  });

  localStorage.setItem('items', JSON.stringify(items));
  window.location.reload();
};

const editContent = (e, p, items) => {
  const edit = e.target;
  edit.removeAttribute('readonly');
  edit.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      edit.setAttribute('readonly', 'readonly');
      edit.value = p.value;
      items.forEach((item) => {
        if (item.id.toString() === edit.parentElement.parentElement.id) {
          item.description = edit.value;
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    }
  });
};

const removeOne = (e, items) => {
  items = [...JSON.parse(localStorage.getItem('items'))];
  const remove = e.target;
  items.forEach((item) => {
    if (item.id.toString() === remove.parentElement.parentElement.id) {
      const index = items.indexOf(item);
      items.splice(index, 1);
      let i = 0;
      while (i < items.length) {
        if (items[i].id > item.id) {
          items[i].id -= 1;
        }
        i += 1;
      }
    }
    remove.parentElement.parentElement.remove();
    localStorage.setItem('items', JSON.stringify(items));
  });
  window.location.reload();
};

export {
  addTask, removeTasks, editContent, removeOne,
};
