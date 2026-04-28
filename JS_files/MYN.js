
function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "css_files/MYN.css") {
        theme.setAttribute("href", "css_files/MYN2.css");
        localStorage.setItem("theme", "light");
    } else {
        theme.setAttribute("href", "css_files/MYN.css");
        localStorage.setItem("theme", "dark");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "dark";

    if (saved === "light") {
        document.getElementById("theme-style").href = "css_files/MYN2.css";
        movieDiv.style.backgroundColor
    } else {
        document.getElementById("theme-style").href = "css_files/MYN.css";
    }
};

function addToFavorites(title, poster) {
    let fav = JSON.parse(localStorage.getItem("favorites")) || [];
    let index = fav.findIndex(item => item.title === title);
    if (index > -1) {
        fav.splice(index, 1);
    } else {
        fav.unshift({ title, poster });
    }
    if (fav.length > 5) fav.pop();
    localStorage.setItem("favorites", JSON.stringify(fav));
}

let card =
{
    title: ["Project Hail Mary", "Interstellar", "Oppenheimer", "Inception", "The Dark Knight", "The Lord of the Rings",
        "IT", "Wonder Woman", "Blade Runner 2049", "Avengers: Infinity War", "Black Panther", "Joker", "Killer Of The Flower Moon", "Parasite",
        "Tenet", "Dune", "Batman", "Spider-Man: Into The Spider-Verse", "Baby Driver", "Ready Player One", "Alita: Battle Angel", "Jojo Rabbit", "Soul", "The Invisible Man", "Palm Springs"
        , "Spider-Man: No Way Home", "Free Guy", "No Time to Die", "Top Gun: Maverick", "The Menu", "Glass Onion", "The Super Mario Bros. Movie", "Barbie", "Abigail", 'Deadpool & Wolverine',
        'The Wild Robot', 'Furiosa: A Mad Max Saga'

    ],


    image: ['imgs/projectHail.jpg', 'imgs/interstellar.jpg', 'imgs/oppenheimer.jpg', 'imgs/inception.jpg', 'imgs/darkKnight.jpg',
        'imgs/lordOfTheRings.jpg', 'imgs/it.jpg', 'imgs/wonderWoman.jpg', 'imgs/bladeRunner.jpg', 'imgs/avengers.jpg', 'imgs/blackPanther.jpg', 'imgs/joker.jpg'
        , "imgs/killerOfTheFlower.jpg", 'imgs/parasite.jpg', 'imgs/tenet.jpg', 'imgs/dune.jpg', 'imgs/batman.jpg', 'imgs/spiderMan.jpg', 'imgs/babyDriver.jpg', 'imgs/readyPlayer.jpg',
        'imgs/battleAng.jpg', 'imgs/jojo.jpg', 'imgs/soul.jpg', 'imgs/inv.jpg', 'imgs/palm.jpg', 'imgs/spiderman2.jpg', 'imgs/freeGuy.jpg', ' imgs/noTime.jpg', ' imgs/topGun.jpg', ' imgs/menu.jpg',
        ' imgs/glassOnion.jpg', ' imgs/superMario.jpg', ' imgs/barbie.jpg', ' imgs/abigail.jpg', ' imgs/deadAwolf.jpg', ' imgs/wildRob.jpg', " imgs/furiosaAMad.jpg"],
    description: ["A science teacher wakes up alone on a spaceship. As his memory returns, he uncovers a mission to stop a mysterious substance killing Earth's sun and that an unexpected friendship may be the key.",
        "In a dystopian future where Earth has become near-uninhabitable, a team of astronauts embark on a mission to find a new home for humanity.",
        "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "A group of kids face a terrifying clown that feeds on fear in a small town.",
        " Diana, an Amazon warrior, leaves her island to stop a global war.",
        "A young blade runner uncovers a secret that could change society.",
        "The Avengers unite to stop Thanos from wiping out half the universe.",
        "T’Challa returns home to rule Wakanda but faces a powerful rival.", "A failed comedian descends into madness in Gotham City.",
        " A series of murders targets members of the Osage Nation in the 1920s.", "A poor family infiltrates a wealthy household with unexpected consequences",
        " A secret agent manipulates time to prevent global catastrophe.", " A young nobleman must protect the most valuable resource in the universe.",
        " Batman uncovers corruption in Gotham while chasing a serial killer.", " Teen Miles Morales becomes Spider-Man and meets alternate versions of imself.",
        "A getaway driver relies on music to be the best in the game.", " A young man searches a virtual world for a hidden fortune."
        , "A cyborg discovers her past while fighting for survival.", "A boy in Nazi Germany discovers his mother is hiding a Jewish girl.",
        "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul."
        , "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see."
        , "Nyles and Sarah find themselves stuck in a time loop and living the same day over and over again. They are drawn to each other, but certain revelations threaten their budding romance."
        , "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.", "When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, open-world video game, he goes on to become the hero of the story and takes the responsibility of saving the world.",
        "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        "The story involves Maverick confronting his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.",
        "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.", "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case.",
        "Brooklyn plumbers Mario and Luigi are warped to the magical Mushroom Kingdom, and Mario must team up with Princess Peach, Toad, and Donkey Kong to save Luigi from the evil Bowser.", "Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world, they soon discover the joys and perils of living among regular humans.",
        "After a group of criminals kidnap the ballerina daughter of a powerful underworld figure, they retreat to an isolated mansion, unaware that they're locked inside with no normal little girl.", 'Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.',
        'A sentient robot stranded on an uninhabited island raises an orphaned gosling while trying to fit in with the local wildlife.', 'After being snatched from the Green Place of Many Mothers, while the tyrants Dementus and Immortan Joe fight for power and control, the young Furiosa must survive many trials as she puts together the means to find her way home.',



    ],
    type: ["Sci-Fi,Comedy and Adventure", "Sci-Fi,Adventure and Drama", "Biography,Drama and History",
        "Action,Adventure and Sci-Fi", "Action,Adventure and Crime", "Action,Adventure and Fantasy"
        , "Horror", "Action ", "Sci-Fi", "Action", "Action", "Drama", "Crime", "Drama", "Sci-Fi", "Sci-Fi and Adventure", "Action and Crime", " Animation and Action", "Action and Crime", "Sci-Fi and Adventure", " Sci-Fi and Action", "Comedy and Drama",
        " Animation and Fantasy", "Horror and Thriller", "Comedy and Romance", "Action and Adventure", "Action and Comedy", "Action", " Action and Drama", "Thriller", " Comedy and Mystery ", 'Animation and Adventure', ' Comedy and Fantasy', 'Horror,Action and Comedy', 'Action and Comedy', ' Animation and Sci-Fi'
        , '"Action,Adventure and Sci-Fi"'],

    releaseDate: ["2026", "2014", "2023", "2010", "2008", "2003", "2017", "2017", "2017", "2018", "2018", "2019", "2023", "2019", "2020", "2021", "2022", "2018", "2017", "2018", "2019", "2019", "2020", "2020", "2020", "2021", "2021", "2021", "2022", "2022", "2022", "2023", "2023", "2024", "2024", "2024", "2024"],
    link: ["https://www.imdb.com/title/tt12042730/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_proj", "https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_int",
        "https://www.imdb.com/title/tt15398776/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_opp", "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_4_tt_7_nm_0_in_0_q_inc",
        "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_The%20dark", "https://www.imdb.com/title/tt0167260/?ref_=tt_mlt_i_2", "https://www.imdb.com/title/tt1396484/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_it",
        "https://www.imdb.com/title/tt0451279/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_wonder%20woma", "https://www.imdb.com/title/tt1856101/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_blade", "https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_7_tt_8_nm_0_in_0_q_aven",
        "https://www.imdb.com/title/tt1825683/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_black%20pa", "https://www.imdb.com/title/tt7286456/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_joker", "https://www.imdb.com/title/tt5537002/?ref_=nv_sr_srsg_3_tt_5_nm_3_in_0_q_killer%20of%20the%20flower",
        "https://www.imdb.com/title/tt6751668/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_parasi", "https://www.imdb.com/title/tt6723592/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_tenet", "https://www.imdb.com/title/tt1160419/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_dune",
        "https://www.imdb.com/title/tt1877830/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_batman", "https://www.imdb.com/title/tt4633694/?ref_=nv_sr_srsg_8_tt_6_nm_2_in_0_q_spider%20", "https://www.imdb.com/title/tt3890160/?ref_=nv_sr_srsg_3_tt_7_nm_1_in_0_q_baby",
        "https://www.imdb.com/title/tt1677720/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_ready%20%20play", "https://www.imdb.com/title/tt0437086/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_battle%20ang", "https://www.imdb.com/title/tt2584384/?ref_=nv_sr_srsg_3_tt_2_nm_6_in_0_q_jojo",
        "https://www.imdb.com/title/tt2948372/?ref_=sr_i_8", "https://www.imdb.com/title/tt9484998/?ref_=sr_i_14", "https://www.imdb.com/title/tt10872600/?ref_=sr_t_1", "https://www.imdb.com/title/tt6264654/?ref_=sr_i_19", "https://www.imdb.com/title/tt2382320/?ref_=sr_i_5",
        "https://www.imdb.com/title/tt1745960/?ref_=sr_t_1", "https://www.imdb.com/title/tt9764362/?ref_=sr_t_4", "https://www.imdb.com/title/tt11564570/?ref_=sr_i_14", "https://www.imdb.com/title/tt6718170/?ref_=sr_t_1", "https://www.imdb.com/title/tt1517268/?ref_=sr_t_7",
        "https://www.imdb.com/title/tt27489557/?ref_=sr_t_12", "https://www.imdb.com/title/tt6263850/?ref_=sr_t_18", 'https://www.imdb.com/title/tt29623480/?ref_=sr_i_25', 'https://www.imdb.com/title/tt12037194/?ref_=sr_t_35'

    ]
}
    ;


let type = document.querySelector("#type-select");
type.addEventListener("mouseover", function () {
    type.style.backgroundColor = "black";
    type.style.borderColor = "black";
});
type.addEventListener("mouseout", function () {
    type.style.backgroundColor = "#5a2d9c";
    type.style.borderColor = "#5a2d9c";
});

let releaseDate = document.querySelector("#release-date");
releaseDate.addEventListener("mouseover", function () {
    releaseDate.style.backgroundColor = "black";
    releaseDate.style.borderColor = "black";
});
releaseDate.addEventListener("mouseout", function () {
    releaseDate.style.backgroundColor = "#5a2d9c";
    releaseDate.style.borderColor = "#5a2d9c";
});
function showMovies(movie, filterType = "All", filterReleaseDate = "All") {
    let container = document.querySelector(".movies-container");
    container.innerHTML = "";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";

    container.style.margin = "45px 0 0 70px";
    for (let i = 0; i < (movie.title.length); i++) {
        let type = movie.type[i];
        let release = movie.releaseDate[i];
        let typeMatch = (filterType === "All" || type.includes(filterType));
        let releaseMatch = (filterReleaseDate === "All" || release === filterReleaseDate);
        if (typeMatch && releaseMatch) {
            let movieDiv = document.createElement("div");
            movieDiv.setAttribute = "class";
            movieDiv.classList = "add";
            movieDiv.style.width = "300px";
            movieDiv.style.height = "500px";
            movieDiv.style.display = "flex";
            movieDiv.style.flexDirection = "column";
            movieDiv.style.alignItems = "center";
            movieDiv.style.borderRadius = "15px";
            movieDiv.style.justifyContent = "center";
            movieDiv.style.transition = "transform 0.4s, box-shadow 0.3s";
            movieDiv.style.margin = `12px`;
            let imageEl = document.createElement("img");
            imageEl.src = movie.image[i];
            imageEl.alt = movie.title[i];
            imageEl.style.width = "100%";

            imageEl.style.objectFit = "cover";
            imageEl.style.borderRadius = "15px";

            let titleEl = document.createElement("h3");
            titleEl.textContent = movie.title[i];
            titleEl.style.fontSize = "17px";
            titleEl.style.height = "auto";


            let descEl = document.createElement("p");
            descEl.textContent = "Description: " + movie.description[i];
            descEl.style.fontSize = "14px";
            descEl.style.height = "50px";


            let typeEl = document.createElement("p");
            typeEl.textContent = "Type: " + movie.type[i];
            typeEl.style.fontSize = "14px";
            typeEl.style.height = "60px";


            let dateEl = document.createElement("p");
            dateEl.textContent = "Release Date: " + movie.releaseDate[i];
            dateEl.style.fontSize = "14px";
            dateEl.style.height = "60px";

            let cardLink = document.createElement("a");
            cardLink.href = `${movie.link[i]}`;
            cardLink.target = "_blank";
            cardLink.textContent = "more details(Imdb)";
            cardLink.style.textDecoration = "none";

            let addToFa = document.createElement("i");
            addToFa.classList = ("fa-regular fa-heart");
            addToFa.addEventListener('click', function () {
                addToFa.classList = "fa-solid fa-heart"
            })

            let favList = JSON.parse(localStorage.getItem("favorites")) || [];
            let isFav = favList.some(item => item.title === movie.title[i]);

            addToFa.addEventListener('click', function () {
                addToFavorites(movie.title[i], movie.image[i]);
                let updatedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
                let nowFav = updatedFavs.some(item => item.title === movie.title[i]);
                addToFa.className = nowFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
            });

            titleEl.setAttribute = "class";
            titleEl.classList = ("movieinfo");
            descEl.setAttribute = "class";
            descEl.classList = ("movieinfo");
            imageEl.setAttribute = "class";
            imageEl.classList = ("movimg");
            typeEl.setAttribute = "class";
            typeEl.classList = ("movieinfo");
            dateEl.setAttribute = "class";
            dateEl.classList = ("movieinfo");
            cardLink.setAttribute = 'class';
            cardLink.classList = ("linkc");
            movieDiv.addEventListener("mouseover", function () {
                titleEl.style.display = "block";
                typeEl.style.display = "block";
                descEl.style.display = "block";
                cardLink.style.display = "block";
                dateEl.style.display = "block";
                imageEl.style.display = 'none';
            });
            movieDiv.addEventListener("mouseout", function () {
                titleEl.style.display = "none";
                typeEl.style.display = "none";
                descEl.style.display = "none";
                cardLink.style.display = "none";
                dateEl.style.display = "none";
                imageEl.style.display = "block";
            });

            movieDiv.appendChild(titleEl);
            movieDiv.appendChild(imageEl);
            movieDiv.appendChild(descEl);
            movieDiv.appendChild(typeEl);
            movieDiv.appendChild(dateEl);
            movieDiv.appendChild(addToFa);
            movieDiv.appendChild(cardLink);
            container.appendChild(movieDiv);
        }

    }
}

let typeSelect = document.querySelector("#type-select");
let releaseDateSelect = document.querySelector("#release-date");

function applyFilters() { showMovies(card, typeSelect.value, releaseDateSelect.value); }

typeSelect.addEventListener("change", applyFilters);
releaseDateSelect.addEventListener("change", applyFilters);

showMovies(card);
