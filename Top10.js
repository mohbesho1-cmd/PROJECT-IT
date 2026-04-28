
function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "Top10.css") {
        theme.setAttribute("href", "Top10,2,.css");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    } else {
        theme.setAttribute("href", "Top10.css");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "dark";

    if (saved === "light") {
        document.getElementById("theme-style").href = "Top10,2,.css";
        document.body.classList.remove("dark");
    } else {
        document.getElementById("theme-style").href = "Top10.css";
        document.body.classList.add("dark");
    }
};
const topMovies=[{title:"interstellar",img:"107270-Interstellar_movie.jpg",year:2014,genre:' Sci-fi / Adventure / Drama',link:'https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_inter'},
    {title:"the meg",img:"the meg.webp",year:2018,genre:' Action / Sci-fi',link:'https://www.imdb.com/title/tt4779682/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_the%20meg'},
    {title:"Rampage",img:"Rampage.jpg",year:2018,genre:' Action / Sci-fi/ Monster',link:'https://www.imdb.com/title/tt2231461/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_Rampage'},
    {title:"Avengers Infinity War",img:"Avengers Infinity war.jpg",year:2018,genre:' Superhero / Action / Sci-fi',link:'https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_avengers%20inf'},
    {title:"Venom: The last dance",img:"vGXptEdgZIhPg3cGlc7e8sNPC2e.webp",year:2024,genre:' Superhero / Action / Sci-fi',link:'https://www.imdb.com/title/tt16366836/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_venom%20the'},
    {title:"Wrath Of Man",img:"Wrath-of-Man.jpg",year:2021,genre:'Action / Crime / Drama',link:'https://www.imdb.com/title/tt11083552/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_wrath'},
    {title:"Undisputed:Last Man Standing",img:"Boyka 2.jpg",year:2006,genre:' Action / Martial Arts /Sports',link:'https://www.imdb.com/title/tt0443676/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_undisputed%202'},
    {title:"Thor Ragnarok",img:"4k-thor-ragnarok-cl.jpg",year:2017,genre:' Superhero / Action / Comedy',link:'https://www.imdb.com/title/tt3501632/?ref_=nv_sr_srsg_3_tt_4_nm_4_in_0_q_thor'},
    {title:"Expendables 3",img:"Expendables 3.jpg",year:2014,genre:' Action / Adventure / Crime',link:'https://www.imdb.com/title/tt2333784/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_expendables%203'},
    {title:"Fast X",img:"fast x.jpg",year:2023,genre:' Action / Racing / Crime',link:'https://www.imdb.com/title/tt5433140/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_fast'},];
    

const topseries=[{title:"Euphoria",img:"E.jpg",year:2019,genre:'Teen Drama',link:'https://www.imdb.com/title/tt8772296/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_euph'},
    {title:"Daredevil",img:"D.jpg",year:2015,genre:' Superhero / Neo-Noir ',link:'https://www.imdb.com/title/tt18923754/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_dare'},
    {title:"The Boys",img:"2.avif",year:2019,genre:' Satirical Superhero ',link:'https://www.imdb.com/title/tt1190634/?ref_=nv_srb_trend_title_2'},
    {title:"Bloodhounds",img:"bloodhounds.jpg",year:2023,genre:' Action / Crime ',link:'https://www.imdb.com/title/tt26315487/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_bloo'},
    {title:"Breaking Bad",img:"1.jpg",year:2008,genre:' Crime Drama / Neo-Western ',link:'https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_brea'},
    {title:"Stranger Things",img:"OIP.webp",year:2016,genre:'Sci-Fi / Horror',link:'https://www.imdb.com/title/tt4574334/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_Stra'},
    {title:"Game of thrones",img:"Gameofthrones.jpg",year:2011,genre:' Fantasy / Drama ',link:'https://www.imdb.com/title/tt0944947/?ref_=nv_sr_srsg_0_tt_3_nm_5_in_0_q_ga'},
    {title:"The Last Of Us",img:"the-last-of-us-poster-1.avif",year:2023,genre:' Post-Apocalyptic Drama ',link:'https://www.imdb.com/title/tt3581920/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_the%20last'},
    {title:"Shogun",img:"OIP (1).webp",year:2024,genre:'Historical Drama',link:'https://www.imdb.com/title/tt2788316/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_shog'},
    {title:"Succession",img:"OIP (2).webp",year:2018,genre:'Satirical Comedy-Drama',link:'https://www.imdb.com/title/tt7660850/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_succ'},
];

function CreateMovieCard(movie){
    const card=document.createElement('div');
    card.classList.add('card');
    const img=document.createElement('img');
    img.src=movie.img;
    const content=document.createElement('div');
    content.classList.add('cardcontent');
    const title=document.createElement('h3');
    title.textContent=movie.title;
    const release=document.createElement('h5');
    release.textContent=movie.year;
    const genre=document.createElement('p');
    genre.textContent=movie.genre;
    const link=document.createElement('a');
    link.href=movie.link;
    link.classList.add('movie-links');
    link.target="-blank";
    let button=document.createElement('div');
    button.classList.add('carousel-wrapper');
      
    

    content.appendChild(title);
    content.appendChild(release);
    content.appendChild(genre);
    content.appendChild(link);
    card.appendChild(img);
    card.appendChild(content);
    

return card;

};
function scrollGrid(direction,gridid){
    let container=document.getElementById(gridid);
    let scrollamount=250;
    if (container) {
    container.scrollBy({
      left: direction * scrollamount,
      behavior: "smooth"
    });}
    
}


const grid = document.getElementById('movie-grid');
for (const movie of topMovies) {
    const card = CreateMovieCard(movie);
    grid.appendChild(card);
};
const seriesgrid = document.getElementById('series-grid');
for (const series of topseries) {
    const card = CreateMovieCard(series);
   seriesgrid.appendChild(card);
}
