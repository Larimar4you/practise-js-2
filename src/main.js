import moviesData from './data/movie.json';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

console.log(moviesData.results);

{
  /* <li class="task-list-item">
<h3>Заголовок</h3>
<p>Текст</p>
<button class="task-list-item-btn">Add to &#10084;</button> */
}

const taskList = document.querySelector('#task-list');
console.log(taskList);

function createMarkup(array) {
  return array
    .map(movie => {
      return `  <li data-id='${movie.id}' class="task-list-item">
      <img src="${BASE_URL_IMG}${movie.poster_path}" alt="" class="movieImage">
      <h3>${movie.title}</h3>
      <p>${movie.popularity}</p>
      <button class="task-list-item-btn">Add to &#10084;</button>
  </li>`;
    })
    .join('');
}

const markupMovies = createMarkup(moviesData.results);
console.log(markupMovies);

taskList.insertAdjacentHTML('beforeend', markupMovies);

export function createTaskMarkup(task) {
  return `
    <li class="task-list-item" data-id="${task.id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${task.title}</h3>
      <p>${task.text}</p>
    </li>
  `;
}
