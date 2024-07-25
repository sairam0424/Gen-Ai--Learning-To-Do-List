// Get the form and task list elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add a submit event listener to the form
taskForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the task input value
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  // If the input is not empty, add the task to the list
  if (taskText !== '') {
    // Create a new list item element
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <input type="date">
      <select>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button>Delete</button>
    `;

    // Add a click event listener to the delete button
    taskItem.querySelector('button').addEventListener('click', function() {
      taskItem.remove();
    });

    // Add a change event listener to the checkbox
    taskItem.querySelector('input[type="checkbox"]').addEventListener('change', function() {
      taskItem.classList.toggle('completed');
    });

    // Add a dblclick event listener to the task text
    taskItem.querySelector('span').addEventListener('dblclick', function() {
      const newText = prompt('Enter new task text:', taskText);
      if (newText !== null && newText.trim() !== '') {
        taskItem.querySelector('span').textContent = newText.trim();
      }
    });

    // Add the new task item to the list
    taskList.appendChild(taskItem);

    // Clear the task input value
    taskInput.value = '';
  }
});