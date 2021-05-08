const MOVIE_API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by?popular.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function Movies() {
        const r = await fetch(MOVIE_API_URL);
        const rData = await r.json();

        console.log(rData);
        const main = document.querySelector("main");
        rData.results.forEach(movie => {
                    const {
                        poster_path,
                        title,
                        vote_average
                    } = movie;
                    const movieEl = document.createElement("div");
                    movieEl.classList.add("movie");

                    movieEl.innerHTML = `

    <img 
    src="${IMGPATH+poster_path}"
    alt ="${title}"
    />
    
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
   </div>
   `;
        main.appendChild(movieEl);

    });
    return rData;
}

function getClassByRate(average) {

    if (average > 8) {
        return "green";
    } else if (average >= 5) {
        return "orange";
    } else {
        return "red";
    }

}
Movies();
