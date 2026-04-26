function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "account.css") {
        theme.setAttribute("href", "account2.css");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    } else {
        theme.setAttribute("href", "account.css");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "dark";

    if (saved === "light") {
        document.getElementById("theme-style").href = "account2.css";
        document.body.classList.remove("dark");
    } else {
        document.getElementById("theme-style").href = "account.css";
        document.body.classList.add("dark");
    }
};
// When page loads, read from localStorage and display saved data
document.addEventListener("DOMContentLoaded", function() {
    const savedUsername = localStorage.getItem("username");
    const savedBio = localStorage.getItem("bio");

    if (savedUsername) {
        document.getElementById("display-username").textContent = savedUsername;
    }

    if (savedBio) {
        document.getElementById("display-bio").textContent = savedBio;
    }

});

// When save button is clicked, save to localStorage and update display
document.getElementById("save-profile").addEventListener("click", function() {
    const newUsername = document.getElementById("username-input").value;
    const newBio = document.getElementById("bio-input").value;

    localStorage.setItem("username", newUsername);
    localStorage.setItem("bio", newBio);

    document.getElementById("display-username").textContent = newUsername;
    document.getElementById("display-bio").textContent = newBio;

        // Clear inputs after saving
    document.getElementById("username-input").value = "";
    document.getElementById("bio-input").value = "";
});

// Preview image when file is selected
document.getElementById("profile-pic-input").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64 = e.target.result;
            // Update both avatar circles immediately
            document.getElementById("avatar-preview").style.backgroundImage = `url(${base64})`;
            document.getElementById("avatar-preview").style.backgroundSize = "cover";
        };
        reader.readAsDataURL(file);
    }
});

// Save picture button
document.getElementById("save-picture").addEventListener("click", function() {
    const base64 = document.getElementById("avatar-preview").style.backgroundImage
        .replace('url("', '').replace('")', '');
    
    if (base64) {
        localStorage.setItem("profilePic", base64);
        // Update profile overview avatar too
        document.getElementById("profile-avatar").style.backgroundImage = `url(${base64})`;
        document.getElementById("profile-avatar").style.backgroundSize = "cover";
        
        // Clear preview after saving
        document.getElementById("profile-pic-input").value = "";
        document.getElementById("avatar-preview").style.backgroundImage = "";
        document.getElementById("avatar-preview").style.backgroundColor = "#3a3a3a";
    }
});

// On page load, restore saved picture
document.addEventListener("DOMContentLoaded", function() {
    const savedUsername = localStorage.getItem("username");
    const savedBio = localStorage.getItem("bio");

    if (savedUsername) {
        document.getElementById("display-username").textContent = savedUsername;
        // removed: username-input line
    }

    if (savedBio) {
        document.getElementById("display-bio").textContent = savedBio;
        // removed: bio-input line
    }

    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
        // Only restore profile overview avatar, not the preview circle
        document.getElementById("profile-avatar").style.backgroundImage = `url(${savedPic})`;
        document.getElementById("profile-avatar").style.backgroundSize = "cover";
    }
});

// Call this function whenever you need to update the favorites display
function renderFavorites() {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const cards = document.querySelectorAll(".fav-card");

    cards.forEach((card, index) => {
        const posterImg = card.querySelector(".poster-img");
        const posterTitle = card.querySelector(".poster-title");

        if (favs[index]) {
            posterImg.style.backgroundImage = `url(${favs[index].poster})`;
            posterImg.style.backgroundSize = "cover";
            posterImg.style.backgroundPosition = "center";
            posterTitle.textContent = favs[index].title;
        } else {
            posterImg.style.backgroundImage = "";
            posterTitle.textContent = "Empty";
        }
    });
}

// Call on page load
document.addEventListener("DOMContentLoaded", renderFavorites);

