function toggleTheme() {
    let theme = document.getElementById("theme-style");

    if (theme.getAttribute("href") === "contact_us.css") {
        theme.setAttribute("href", "contact_us2.css");
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark");
    } else {
        theme.setAttribute("href", "contact_us.css");
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
    }
}

// load saved theme
window.onload = function () {
    let saved = localStorage.getItem("theme") || "dark";

    if (saved === "light") {
        document.getElementById("theme-style").href = "contact_us2.css";
        document.body.classList.remove("dark");
    } else {
        document.getElementById("theme-style").href = "contact_us.css";
        document.body.classList.add("dark");
    }
};

/* --- Character counter --- */
function updateCharCount(textarea) {
    const count = textarea.value.length;
    document.getElementById('charCount').textContent = count + ' / 500';
}

/* --- Email validation helper --- */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* --- Show / hide error messages --- */
function setError(elementId, visible) {
    const el = document.getElementById(elementId);
    if (visible) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
}

/* --- Form submission handler --- */
function handleSend() {
    const email = document.getElementById('email').value.trim();
    const msg   = document.getElementById('msg').value.trim();
    const btn   = document.getElementById('sendBtn');

    let hasError = false;

    /* Validate email */
    if (!email || !isValidEmail(email)) {
        setError('emailError', true);
        hasError = true;
    } else {
        setError('emailError', false);
    }

    /* Validate message */
    if (!msg) {
        setError('msgError', true);
        hasError = true;
    } else {
        setError('msgError', false);
    }

    if (hasError) {
        btn.classList.add('error');
        setTimeout(() => btn.classList.remove('error'), 1200);
        return;
    }

    /* Success state */
    document.getElementById('btnText').textContent = 'Message sent!';
    document.getElementById('btnIcon').innerHTML =
        '<path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    btn.classList.add('sent');
    btn.disabled = true;
}