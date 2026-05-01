function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "home-css/main.css") {
        theme.setAttribute("href", "home-css/main2.css");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    } else {
        theme.setAttribute("href", "home-css/main.css");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "dark";

    if (saved === "light") {
        document.getElementById("theme-style").href = "home-css/main2.css";
        document.body.classList.remove("dark");
    } else {
        document.getElementById("theme-style").href = "home-css/main.css";
        document.body.classList.add("dark");
    }
};
const movies = [
    {
        title: "Zendaya & Robert Shine in Upcoming Film “The Drama”",
        desc: "Hollywood is buzzing about “The Drama”, a highly anticipated film starring Zendaya and Robert. The movie explores a powerful emotional story filled with tension, romance, and unexpected twists between two complex characters whose lives become deeply intertwined. Early reports suggest strong performances and a visually stunning cinematic style, making it one of the most talked-about upcoming releases.",
        poster: "home-material/The Drama.jpg",
        trailer: "home-material/YTDown_YouTube_THE-DRAMA-Official-Trailer-2-2026-Zenday_Media_g6WKGjpTSlE_004_360p.mp4"
    },
    {
        title: "Euphoria Season 3 – New Struggles, Deeper Truths, and Unfinished Stories",
        desc: "Euphoria Season 3 continues to follow the complex lives of Rue and her friends as they navigate love, addiction, identity, and the consequences of their past choices. As new challenges arise and relationships shift, each character is forced to confront difficult truths about themselves and their future. The upcoming season is expected to deliver even more emotional intensity, raw storytelling, and powerful performances that have defined the series.",
        poster: "home-material/Euphoria s3.jpg",
        trailer: "home-material/YTDown.com_YouTube_Euphoria-Season-3-Episode-3-Preview-HBO-_Media_I1wmAQN_caY_001_1080p.mp4"
    },
    {
        title: "Daredevil: Born Again Season 2 – Hell’s Kitchen Faces Its Darkest Hour",
        desc: "Daredevil: Born Again Season 2 continues Matt Murdock’s fight to protect Hell’s Kitchen as new threats rise from both the criminal underworld and within the justice system itself. As old enemies return and new dangers emerge, Daredevil is forced to push his limits as both a lawyer and a vigilante. The season is expected to deliver intense courtroom drama, brutal street-level action, and a deeper look into Matt’s struggle between justice and vengeance.",
        poster: "home-material/Daredevil.jpg",
        trailer: "home-material/YTDown.com_YouTube_Daredevil-Born-Again-Season-2-Trailer-Di_Media_SkGd0zH1DE4_001_1080p.mp4"
    },
    {
        title: "Mortal Kombat: Enter the Arena",
        desc: "Mortal Kombat takes you into a brutal and ancient tournament where warriors from different realms are forced to fight for survival. Chosen fighters must battle powerful enemies, each with their own deadly skills, in a fight that determines the fate of entire worlds. Every round pushes them closer to victory or destruction, where strength, skill, and courage are the only things that matter. In this merciless arena, there are no second chances — only one warrior can rise above all and claim ultimate victory.",
        poster: "home-material/Mortal kombat.jpg",
        trailer: "home-material/YTDown.com_YouTube_Mortal-Kombat-II-Trailer-II-2026_Media_o7mTgt8Cb80_001_1080p (1).mp4"
    },
    {
        title: "The Odyssey – A Legendary Journey Reimagined for a New Era",
        desc: "The Odyssey reimagines the classic epic tale of survival, courage, and destiny as a hero battles against gods, monsters, and fate itself to return home. The story follows a long and dangerous journey filled with trials across unknown lands and seas, testing the limits of human endurance and willpower. With a modern cinematic vision, the film brings mythological scale, emotional depth, and breathtaking adventure to the screen.",
        poster: "home-material/THE ODYSSEY.jpg",
        trailer: "home-material/THE ODYSSEY Official Trailer (2026).mp4"
    }, {
        title: "Spider-Man is back but everything has changed.",
        desc: "Spider-Man: Brand New Day follows Peter Parker as he tries to rebuild his life after everything he has lost. With his identity exposed and his world turned upside down, Peter faces the challenge of starting over while still protecting New York City. As new threats begin to rise and old enemies return in unexpected ways, he must find the strength to move forward without the support he once had. Every choice becomes heavier, and every battle pushes him further into a life where being Spider-Man means sacrificing normalcy for responsibility. In this new chapter, Peter learns that even after everything falls apart, a hero can still rise again.",
        poster: "home-material/spiderman bnd.jpg",
        trailer: "home-material/YTDown_YouTube_SPIDER-MAN-4-Brand-New-Day-Official-Trai_Media_dbDcyf8S3ss_004_360p.mp4"
    },
    {
        title: "The Boys Season 5 – The Final War Between Heroes and Reality",
        desc: "The Boys Season 5 pushes the conflict between corrupt superheroes and the resistance to its breaking point. As tensions rise and alliances collapse, Butcher and his team face their most dangerous battle yet against The Seven and the power behind Vought. With escalating violence, moral chaos, and shocking twists, the final season is expected to deliver a brutal conclusion that exposes the true cost of power and control.",
        poster: "home-material/The boys.jpg",
        trailer: "home-material/YTDown_YouTube_The-Boys-Season-5-2026-1-Trailer-Prime-V_Media_RIEQpkTwZYg_003_480p.mp4"
    }
];

function showMovie(index) {
    document.getElementById("movieTitle").innerText = movies[index].title;
    document.getElementById("movieDesc").innerText = movies[index].desc;
    document.getElementById("moviePoster").src = movies[index].poster;
    document.getElementById("movieTrailer").src = movies[index].trailer;
}
function showMovie(index) {
    document.getElementById("movieTitle").innerText = movies[index].title;
    document.getElementById("movieDesc").innerText = movies[index].desc;
    document.getElementById("moviePoster").src = movies[index].poster;

    // Store trailer URL and show/hide button
    const btn = document.getElementById("trailerBtn");
    btn.dataset.trailer = movies[index].trailer;

    if (movies[index].trailer) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
}

function openTrailer() {
    const trailer = document.getElementById("trailerBtn").dataset.trailer;
    if (!trailer) return;

    // Autoplay by appending ?autoplay=1
    document.getElementById("movieTrailer").src = trailer + "?autoplay=1";
    document.getElementById("trailerOverlay").classList.add("active");
}

function closeTrailer(event) {
    // Close if clicking the overlay background or the ✕ button
    if (!event.target.classList.contains("close-btn")) return;

    document.getElementById("movieTrailer").src = ""; // stops video
    document.getElementById("trailerOverlay").classList.remove("active");
}
