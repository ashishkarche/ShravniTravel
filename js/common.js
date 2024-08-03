document.getElementById('current-year').textContent = new Date().getFullYear();

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-container');
    const content = document.querySelector('.content');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    if (loader) {
        loader.style.display = 'none';
    }
    if (content) {
        content.style.display = 'block';
    }

    // Check for user session or cookies
    checkCookie(); // Or checkSession() if using sessionStorage

    // Show popup for 1 second
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 4000);
});

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    const user = getCookie("username");
    const popupContent = document.getElementById('popup-content');

    if (user !== "") {
        popupContent.innerHTML = "Welcome again, " + user;
    } else {
        const userName = prompt("Please enter your name:", "");
        if (userName !== "" && userName !== null) {
            setCookie("username", userName, 365);
            popupContent.innerHTML = "Welcome, " + userName;
        } else {
            popupContent.innerHTML = "Welcome to Shravani Tours & Travels";
        }
    }
}
