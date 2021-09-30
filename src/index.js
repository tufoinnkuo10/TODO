import './style.css';
import { taskCompleted } from './checkbox.js'
// import taskCompleted from './checkbox.js';

const itemsContainer = document.querySelector('.items-container');
const input = document.createElement('input');
const inputCont = document.querySelector('.input');
const title = document.querySelector('.title');
const titleText = document.createElement('p');
const deleteCont = document.querySelector('.delete');
const deleteText = document.createElement('p');
const icon = document.createElement('i');
const enter = document.createElement('i');
//const line= document.createElement('hr');

input.type = 'text';
input.setAttribute('placeholder', 'Enter a new task');
enter.classList.add('fas', 'fa-level-down-alt', 'rotate');
inputCont.appendChild(input);
inputCont.appendChild(enter);

titleText.textContent = 'Todays todo';
icon.classList.add('fas', 'fa-sync');
deleteText.classList.add('textdelete');
title.appendChild(titleText);
title.appendChild(icon);
//title.appendChild(line);

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
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', (e) => taskCompleted(e, items));
    const p = document.createElement('p');
    p.textContent = item.description;
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');
    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(icon);
    itemsContainer.appendChild(div);
    if (item.completed) {
      div.classList.add('completed');
    }
  });
}
class Item {
  constructor() {
    this.description = '';
    this.completed = false;
    this.id = '';
  }
}

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const newItem = new Item();
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const text = document.createElement('p');
    const icon = document.createElement('i');

    div.classList.add('task');

    newItem.description = input.value;
    newItem.id = items.length + 1;
    newItem.completed = false;

    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', taskCompleted);

    text.textContent = input.value;

    icon.classList.add('fas', 'fa-ellipsis-v', 'flex-end');

    div.appendChild(checkbox);
    div.appendChild(text);
    div.appendChild(icon);

    itemsContainer.appendChild(div);

    input.value = '';
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
  }
});
