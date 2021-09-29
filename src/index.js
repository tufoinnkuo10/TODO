
import './style.css'

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
<li>
<input type="checkbox" name="" class="static-list" ${tasks.index}">
<label for="">${tasks.description}<i class="fas fa-ellipsis-v"></i></label>
</li>
`;
myTasks.innerHTML = taskArray.map((tasks) => showTasks(tasks)).join('');