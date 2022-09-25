//search stuff
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://strangepotatoowls.com/search?q=';


function submitted(event) {
  event.preventDefault();
  const url = google + q.value + "&category_general=1&language=en-US&time_range=&safesearch=2&theme=simple";
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);