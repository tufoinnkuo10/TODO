import './style.css';
import taskCompleted from './checkbox.js';
import {
  addTask, editContent, removeOne, removeTasks,
} from './remove.js';

const itemsContainer = document.querySelector('.items-container');
const input = document.createElement('input');
const inputCont = document.querySelector('.input');
const title = document.querySelector('.title');
const titleText = document.createElement('p');
const deleteCont = document.querySelector('.delete');
const deleteText = document.createElement('p');
const icon = document.createElement('i');
const enter = document.createElement('i');
//  const line= document.createElement('hr');

input.type = 'text';
input.autofocus = true;
input.setAttribute('placeholder', 'Enter a new task');
enter.classList.add('fas', 'fa-level-down-alt', 'rotate');
inputCont.appendChild(input);
inputCont.appendChild(enter);

titleText.textContent = 'Todays todo';
icon.classList.add('fas', 'fa-sync');
//  deleteText.classList.add('textdelete');
title.appendChild(titleText);
title.appendChild(icon);
//  title.appendChild(line);

deleteText.textContent = 'Clear all completed';
deleteCont.appendChild(deleteText);

let items = [];
let indexCont = 0;

if (localStorage.getItem('items')) {
  items = [...JSON.parse(localStorage.getItem('items'))];
  items.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.id = `${indexCont += 1}`;
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', (e) => taskCompleted(e, items, deleteCont));

    const p = document.createElement('input');
    p.type = 'text';
    p.setAttribute('readonly', 'readonly');
    p.value = item.description;
    p.addEventListener('click', (e) => editContent(e, p, items));

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');
    const icon2 = document.createElement('i');
    icon2.classList.add('fas', 'fa-trash-alt', 'flex-end');
    icon2.addEventListener('click', (e) => removeOne(e, items));

    iconContainer.appendChild(icon2);
    iconContainer.appendChild(icon);
    inputContainer.appendChild(checkbox);
    inputContainer.appendChild(p);
    div.appendChild(inputContainer);
    div.appendChild(iconContainer);

    itemsContainer.appendChild(div);
    if (item.completed) {
      div.classList.add('completed');
    }
  });
} else {
  localStorage.setItem('items', JSON.stringify(items));
}
class Item {
  constructor() {
    this.description = '';
    this.completed = false;
    this.id = '';
  }
}
input.addEventListener('keydown', (e) => addTask(e, items, input, itemsContainer, Item));

deleteText.addEventListener('click', (e) => removeTasks(e, items, deleteCont, Item));
const refreshPage = () => {
  icon.classList.add('refresh');
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

const refresh = document.querySelector('.fa-sync');
refresh.addEventListener('click', refreshPage);
