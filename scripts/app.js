// UI Elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks'); 
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

/**
 * First Approach to add task to the task list ul
 * 
 */
//Load  all event listners
loadEventListners();

//Load  all event listners
function loadEventListners() {
  // Add task event
  form.addEventListener('submit', addTask);
};

// Add task event
function addTask(e) {
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Add a task');
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
  console.log(li);

  // Clear Input
  taskInput.value = '';
}


/**
//Second approach to add task using template
form.addEventListener('submit', e => {
  e.preventDefault();
  if(taskInput.value === ''){
    alert('Add Task');
  }

  // Create and append a task to the taskList
  const html = `
    <li class="collection-item">
      ${taskInput.value}
      <a href="#" class="delete-item secondary-content">
        <i class="fas fa-trash-alt"></i> 
      </a>
    </li>
  `;

  taskList.innerHTML += html;
  taskInput.value = '';
});
 */



