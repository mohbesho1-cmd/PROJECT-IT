const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrow.forEach((arrow,i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickCnt =0 ;
    arrow.addEventListener("click", ()=>{
        clickCnt++;
        if(itemNum - (4 + clickCnt) >= 0 ){
            movieLists[i].style.transform =`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`
        }else{
            movieLists[i].style.transform ="translateX(0)";
            clickCnt=0;
        }
    })
    
});

function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "full.css") {
        theme.setAttribute("href", "full_white.css");
        localStorage.setItem("theme", "light");
    } else {
        theme.setAttribute("href", "full.css");
        localStorage.setItem("theme", "full");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "full";

    if (saved === "light") {
        document.getElementById("theme-style").href = "full_white.css";
    } else {
        document.getElementById("theme-style").href = "full.css";
    }
};




