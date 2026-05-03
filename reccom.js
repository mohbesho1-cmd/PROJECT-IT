/* ===== Theme Toggle (fix بسيط) ===== */
function toggleTheme() {
const theme = document.getElementById("theme-style");
const current = theme.getAttribute("href");

if (current === "reccom.css") {
    theme.setAttribute("href", "reccom2.css");
    localStorage.setItem("theme", "light");
} else {
    theme.setAttribute("href", "reccom.css");
    localStorage.setItem("theme", "dark");
}
}

window.addEventListener("load", () => {
const saved = localStorage.getItem("theme") || "dark";
document.getElementById("theme-style").href =
    saved === "light" ? "reccom2.css" : "reccom.css";
});
/* ===== Movies Data ==== */
const movies = [
{ title: "Doctor Strange: Multiverse of Madness", year: 2021, rate: 4.6, image: "images.jpg" },
{ title: "Spider Man: No Way Home", year: 2021, rate: 8.1, image: "spiderman.jpg" },
{ title: "Dune Part 2", year: 2024, rate: 8.4, image: "Dune2.jpg" },
{ title: "InterStellar", year: 2014, rate: 9.1, image: "interstellar.jpg" },
{ title: "El Khaleya", year: 2017, rate: 7.2, image: "elkahelya.jpg" },
{ title: "El Dezel", year: 2018, rate: 8.8, image: "eldezel.jpg" },
{ title: "The GodFather", year: 1972, rate: 9.2, image: "thegodfather.jpg" },
{ title: "Avengers: Infinity War", year: 2018, rate: 8.2, image: "avengers.jpg" },
{ title: "Joker", year: 2019, rate: 8.3, image: "Joker.jpg" },
{ title: "Oppenheimer", year: 2018, rate: 8.2, image: "Oppenheimer.jpg" },
{ title: "Inception", year: 2010, rate: 8.8, image: "Inception.jpg" },
{ title: "The Dark Knight", year: 2008, rate: 9.1, image: "The Dark Knight.jpg" },
{ title: "The Imitation Game", year: 2014, rate: 8.0, image: "The Imitation Game.jpg" },
{ title: "IT", year: 2017, rate: 7.3, image: "IT.jpg" },
{ title: "The Wild Robot", year: 2024, rate: 8.2, image: "The Wild Robot.jpg" }
];

/* ===== Load Cards ===== */
const row = document.getElementById("recommRow");

function createCard(movie) {
const card = document.createElement("div");
card.className = "movie-card";
card.style.backgroundImage = `url('${movie.image}')`;

card.innerHTML = `
    <div class="movie-overlay"></div>
    <div class="movie-info">
    <span class="movie-rate">⭐ ${movie.rate}</span>
    <span class="movie-year">${movie.year}</span>
    </div>
    <div class="movie-title">${movie.title}</div>
`;

return card;
}

movies.forEach(m => row.appendChild(createCard(m)));


/*======== Series Data ========*/
const series = [

{ title: "El Ostora", year: 2016, rate: 10.0, image: "El Ostora.jpg" },
{ title: "Game of Thrones", year: 2011, rate: 9.2, image: "Game of Thrones.jpg" },
{ title: "Stranger Things", year: 2016, rate: 8.7, image: "Stranger Things.jpg" },
{ title: "The Boys", year: 2019, rate: 8.6, image: "The Boys.jpg" },
{ title: "Breaking Bad", year: 2008, rate: 9.2, image: "Breaking Bad.jpg" },
{ title: "The Last of Us", year: 2023, rate: 8.5, image: "The Last of Us.jpg" },
{ title: "Peaky Blinders", year: 2013, rate: 8.7, image: "Peaky Blinders.jpg" },
{ title: "Black Mirror", year: 2011, rate: 8.7, image: "Black Mirror.jpg" }
]
/* ===== Load Series Cards ===== */
const seriesRow = document.getElementById("rrecommRow");
function createSeriesCard(serie) {
const seriescard = document.createElement("div");
seriescard.className = "series-card";
seriescard.style.backgroundImage = `url('${serie.image}')`;
seriescard.innerHTML = `
    <div class="series-overlay"></div>
    <div class="series-info">
    <span class="series-rate">⭐ ${serie.rate}</span>
    <span class="series-year">${serie.year}</span>
    </div>
    <div class="series-title">${serie.title}</div>
`;
return seriescard;
}
series.forEach(s =>seriesRow.appendChild(createSeriesCard(s)));

/* ===== Buttons Scroll (Movies + Series) ===== */
document.querySelectorAll(".movies-section, .series-section").forEach(section => {
// row بتاع القسم (movies-row أو series-row)
const row = section.querySelector(".movies-row, .series-row, .Recomm-Movies-container, .Recomm-series-container");
const leftBtn = section.querySelector(".btn-left");
const rightBtn = section.querySelector(".btn-right");

if (!row || !leftBtn || !rightBtn) return;

const STEP = 320;

rightBtn.addEventListener("click", () => {
    row.scrollLeft += STEP;
});

leftBtn.addEventListener("click", () => {
    row.scrollLeft -= STEP;
});
});
