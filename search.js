const allContent = [
    {
        title: "The Drama",
        type: "movie",
        rating: 8.2,
        badge: "New",
        poster: "The Drama.jpg",
        desc: "A powerful emotional story with Zendaya and Robert."
    },
    {
        title: "Euphoria Season 3",
        type: "tv",
        rating: 9.1,
        badge: "Hot",
        poster: "Euphoria s3.jpg",
        desc: "Rue and her friends navigate love, addiction, and identity."
    },
    {
        title: "Daredevil: Born Again S2",
        type: "tv",
        rating: 8.7,
        badge: "New",
        poster: "Daredevil.jpg",
        desc: "Matt Murdock fights to protect Hell's Kitchen."
    },
    {
        title: "Mortal Kombat 2",
        type: "movie",
        rating: 7.5,
        badge: null,
        poster: "Mortal kombat.jpg",
        desc: "Brutal ancient tournament where warriors fight for survival."
    },
    {
        title: "The Odyssey",
        type: "movie",
        rating: 9.4,
        badge: "2026",
        poster: "THE ODYSSEY.jpg",
        desc: "Christopher Nolan reimagines the classic Greek epic."
    },
    {
        title: "Spider-Man: Brand New Day",
        type: "movie",
        rating: 8.9,
        badge: "Hot",
        poster: "spiderman bnd.jpg",
        desc: "Peter Parker rebuilds his life after losing everything."
    },
    {
        title: "The Boys Season 5",
        type: "tv",
        rating: 9.0,
        badge: "Final",
        poster: "The boys.jpg",
        desc: "The final war between corrupt heroes and the resistance."
    },
    {
        title: "The Batman 2",
        type: "movie",
        rating: 8.8,
        badge: "2026",
        poster: null,
        desc: "Bruce Wayne faces a threat that breaks him psychologically."
    },
    {
        title: "Avengers: Doomsday",
        type: "movie",
        rating: 9.3,
        badge: "Hot",
        poster: "Avengers doomsday.jpg",
        desc: "The most ambitious crossover event since Endgame."
    },
    {
        title: "Challengers",
        type: "movie",
        rating: 7.9,
        badge: null,
        poster: null,
        desc: "A story of love, rivalry, and obsession on the tennis court."
    },
    {
        title: "Dune: Part Three",
        type: "movie",
        rating: 8.6,
        badge: "2026",
        poster: null,
        desc: "The epic saga of Paul Atreides continues."
    },
    {
        title: "Breaking Bad",
        type: "tv",
        rating: 9.5,
        badge: "Classic",
        poster: null,
        desc: "A chemistry teacher turns to making methamphetamine."
    },
];


let activeFilter = "all";
let currentQuery  = "";


function setFilter(filter, el) {
    activeFilter = filter;

    
    document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
    el.classList.add("active");

    
    if (currentQuery) doSearch();
}


function handleKey(e) {
    if (e.key === "Enter") doSearch();
}


function handleInput() {
    const val = document.getElementById("searchInput").value.trim();
    const btn = document.getElementById("clearBtn");
    btn.style.cssText = val ? "display:flex !important" : "display:none !important";
    if (val === "") resetToSuggestions();
}

function quickSearch(term) {
    document.getElementById("searchInput").value = term;
    const btn = document.getElementById("clearBtn");
    btn.style.cssText = "display:flex !important";
    doSearch();
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    const btn = document.getElementById("clearBtn");
    btn.style.cssText = "display:none !important";
    resetToSuggestions();
    document.getElementById("searchInput").focus();
}

function doSearch() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!query) return;

    currentQuery = query;

    
    document.getElementById("suggestionsSection").style.display = "none";
    document.getElementById("resultsSection").style.display    = "none";
    document.getElementById("emptyState").style.display        = "none";
    document.getElementById("skeletonGrid").style.display      = "grid";


    setTimeout(() => {
        document.getElementById("skeletonGrid").style.display = "none";

        
        const filtered = allContent.filter(item => {
            const matchQuery =
                item.title.toLowerCase().includes(query) ||
                item.desc.toLowerCase().includes(query)  ||
                item.type.toLowerCase().includes(query);

            const matchFilter =
                activeFilter === "all"                            ||
                item.type   === activeFilter                      ||
                (activeFilter === "top" && item.rating >= 8.8)   ||
                (activeFilter === "new" && item.badge  === "New");

            return matchQuery && matchFilter;
        });

        if (filtered.length === 0) {
            
            document.getElementById("emptyQuery").textContent = `"${query}"`;
            document.getElementById("emptyState").style.display = "flex";
        } else {
            renderResults(filtered, query);
        }

    }, 700);
}

function renderResults(items, query) {

    document.getElementById("resultsHeader").innerHTML =
        `Showing <span>${items.length} result${items.length !== 1 ? "s" : ""}</span> for <span>"${query}"</span>`;

    const grid = document.getElementById("resultsGrid");
    grid.innerHTML = "";

    items.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "result-card";
        
        card.style.animation      = "fadeUp 0.4s ease both";
        card.style.animationDelay = `${i * 0.07}s`;

        card.innerHTML = `
            <div class="card-group">
                <div class="card-left">
                    <div class="result-card-poster-wrap">
                        ${item.badge ? `<span class="result-badge">${item.badge}</span>` : ""}
                        ${item.poster
                            ? `<img class="result-card-poster" src="${item.poster}" alt="${item.title}">`
                            : `<i class="fa-solid fa-film" style="font-size:36px;color:rgba(174,124,255,0.4);"></i>`
                        }
                    </div>
                    <div class="result-card-info">
                        <p class="result-card-type">${item.type === "tv" ? "TV Show" : "Movie"}</p>
                        <p class="result-card-title">${item.title}</p>
                    </div>
                    <div class="rate-badge">Rate : ${item.rating}</div>
                </div>
                <div class="desc-card">
                    <p class="desc-label">Description</p>
                    <p class="desc-text">${item.desc}</p>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    document.getElementById("resultsSection").style.display = "block";
}

function resetToSuggestions() {
    currentQuery = "";
    document.getElementById("suggestionsSection").style.display = "block";
    document.getElementById("resultsSection").style.display     = "none";
    document.getElementById("emptyState").style.display         = "none";
    document.getElementById("skeletonGrid").style.display       = "none";
}

(function() {
    const saved = localStorage.getItem("theme") || "dark";
    const searchTheme = document.getElementById("search-theme-style");
    if (searchTheme) {
        searchTheme.href = saved === "light" ? "search2.css" : "";
    }
})();

function toggleSearchTheme() {
    const saved = localStorage.getItem("theme") || "dark";
    const searchTheme = document.getElementById("search-theme-style");
    if (searchTheme) {
        searchTheme.href = saved === "light" ? "search2.css" : "";
    }
}