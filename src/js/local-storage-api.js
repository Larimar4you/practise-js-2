export function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || []; // Получаем список задач или пустой массив
}

export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем задачи в localStorage
}
