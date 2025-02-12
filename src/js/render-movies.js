import { refs } from './refs.js';
import { createMarkupMovies } from './markup-movies.js';
import { saveTasks, getTasks } from './local-storage-api.js';

export function renderTasks() {
  refs.taskList.innerHTML = '';
  const tasks = getTasks();
  const markup = tasks.map(createTaskMarkup).join('');
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

export function addTaskToDOM(task) {
  refs.taskList.insertAdjacentHTML('beforeend', createTaskMarkup(task));
}

export function removeTaskFromDOM(taskId) {
  const taskElement = document.querySelector(`[data-id="${taskId}"]`);
  if (taskElement) taskElement.remove();
}
