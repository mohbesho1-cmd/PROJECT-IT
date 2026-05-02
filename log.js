function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "dark.css") {
        theme.setAttribute("href", "white.css");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    } else {
        theme.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "dark";

    if (saved === "light") {
        document.getElementById("theme-style").href = "white.css";
        document.body.classList.remove("dark");
    } else {
        document.getElementById("theme-style").href = "dark.css";
        document.body.classList.add("dark");
    }
};
