import './style.css';
import displayBox from './checkbox.js';

const myTasks = document.querySelector('.task-list');

const taskArray = [
  {
    description: 'sports',
    completed: false,
    index: 0,
  },
  {
    description: 'code',
    completed: false,
    index: 1,
  },
  {
    description: 'sleep',
    completed: false,
    index: 2,
  },
];

const showTasks = (tasks) => `
<li data-id="${tasks.index}">
<input type="checkbox" name="" class="static-list" data-id="${tasks.index}" class = "check-list">
<label class="list" for="">${tasks.description}<i class="fas fa-ellipsis-v"></i></label>
</li>
`;
myTasks.innerHTML = taskArray.map((tasks) => showTasks(tasks)).join('');

displayBox();

// add local Storage

const taskArraySerialised = JSON.stringify(taskArray);

localStorage.setItem('taskArray', taskArraySerialised);

const taskArrayDeserialised = JSON.parse(localStorage.getItem('taskArray'));

taskArrayDeserialised();