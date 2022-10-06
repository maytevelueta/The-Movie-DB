// Example of api call. Get your api key from https://www.themoviedb.org/ and replace it with the one below. 
// See https://developers.themoviedb.org/3/getting-started/introduction for more info
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9925d2a8efd45a80c5cad431fc453106&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9925d2a8efd45a80c5cad431fc453106&query=";

const search = document.getElementById("search");
const button = document.getElementById("button");
const main = document.getElementById("main");

getMovie(APIURL);

async function getMovie(url) {
   const resp = await fetch(url);
   const respData = await resp.json();
   console.log(respData);
   showMovies(respData.results);
}

function showMovies(movies) {
   main.innerHTML = '';
   movies.forEach(movie => {
      const { poster_path, title, vote_average, overview } = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('col');
      movieEl.innerHTML = `
            <div class="card">
                <img 
         	        src="${IMGPATH + poster_path}" 
                    alt="${title}"
                    class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-rate">${vote_average}/10</p>
                    <h3 class="card-title">Overview:</h3>
                    <p class="card-text">${overview}</p>
                </div>
            </div>`;
      main.appendChild(movieEl);
   });
}

form.addEventListener('submit', e => {
   e.preventDefault();
   const searchTerm = search.value;
   if (searchTerm) {
      getMovie(SEARCHAPI + searchTerm);
      search.value = '';
   }
});