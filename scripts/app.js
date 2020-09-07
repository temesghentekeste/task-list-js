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
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
};

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

  // Clear Input
  taskInput.value = '';
}

// Add task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks(e) {
  // Slower
  // taskList.innerHTML = '';

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
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


/**
// Second approach
// Add task using template literals
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

// Second approach to remove task
taskList.addEventListener('click', e => {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
})

// Second approacht to clear tasks
clearBtn.addEventListener('click', e => {
  // Slower
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}) 

*/



