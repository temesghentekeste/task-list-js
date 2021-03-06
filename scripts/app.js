// UI Elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

/*
// First approach
//Load  all event listners
loadEventListners();

//Load  all event listners
function loadEventListners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks
  clearBtn.addEventListener('click', clearTasks);
  //  Filter tasks
  filter.addEventListener('keyup', filterTasks);
};

// Get tasks
function getTasks(){
  if(localStorage.getItem('tasks')){
    let tasks;
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach( function(task) {
      // Create li element
      const li = document.createElement('li');
      // Add a class
      li.className = 'collection-item';
      // Create a textNode and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fas fa-trash-alt"></i>'
      // Append to li
      li.appendChild(link);

      // Append li to task list
      taskList.appendChild(li);

    });

  }
}

// Add task event
function addTask(e) {
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Add a task', 'Task List');
    return;
  }

  // Create li element
  const li = document.createElement('li');
  // Add a class
  li.className = 'collection-item';
  // Create a textNode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fas fa-trash-alt"></i>'
  // Append to li
  li.appendChild(link);

  // Append li to task list
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear Input
  taskInput.value = '';
}

// Remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove task from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  tasks.forEach((task, index) => {
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Store in LS
function storeTaskInLocalStorage(task) {
  console.log(task);
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(tasks);
}

// Clear Tasks
function clearTasks(e) {
  // Slower
  // taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear Tasks from LS
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e){
  const input = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent.toLowerCase();
      if(item.indexOf(input) != -1){
        task.style.display = 'block';
      }else{
        task.style.display = 'none';
      }
    }
    )
  }
*/


// /*
// Second approach

const render = taskItem => {
  // Create and append a task to the taskList
  const html = `
  <li class="collection-item">
  ${taskItem.trim()}
  <a href="#" class="delete-item secondary-content">
  <i class="fas fa-trash-alt"></i> 
  </a>
  </li>
  `;

  taskList.innerHTML += html;
};

// Get Tasks
const getTasks = () => (localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);

// Load Tasks
document.addEventListener('DOMContentLoaded', () => {
  const tasks = getTasks();

  tasks.forEach(task => {
  // Render tasks
    render(task);
  });
});

// Store in LS
const storeTaskInLocalStorage = task => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add task using template literals
form.addEventListener('submit', e => {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('Add Task'); // eslint-disable-line no-alert
    return;
  }

  // Render task
  render(taskInput.value);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';
});

// Remove task from LS
const removeTaskFromLocalStorage = taskItem => {
  const tasks = getTasks();

  tasks.forEach((task, index) => {
    if (taskItem.textContent.trim() === task) {
      tasks.splice(index, 1);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
};

// Second approach to remove task
taskList.addEventListener('click', e => {
  if (e.target.parentElement.classList.contains('delete-item')) {
  // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure?')) { // eslint-disable-line no-alert
      e.target.parentElement.parentElement.remove();

      // Remove task from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
});

// Clear Task from localStorage
const clearTasksFromLocalStorage = () => {
  localStorage.clear();
};

// Second approacht to clear tasks
clearBtn.addEventListener('click', () => {
  // Slower
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear tasks from LS
  clearTasksFromLocalStorage();
});


// Second approach to filter tasks
filter.addEventListener('keyup', e => {
  const input = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(task => {
    const text = task.firstChild.textContent.toLowerCase();
    if (text.indexOf(input) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});

// */
