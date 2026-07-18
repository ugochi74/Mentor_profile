// Welcome Message
window.onload = function () {
    alert("Welcome to the profile of Odo Sunday Ikembuchukwu.");
};

// Automatic Year
document.getElementById("year").textContent =
new Date().getFullYear();

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Bible Verse
function showVerse() {
    alert(
`Philippians 4:13

"I can do all things through Christ who strengthens me."`
    );
}

// Current Date and Time
function updateClock() {

    const now = new Date();

    const date = now.toDateString();

    const time = now.toLocaleTimeString();

    document.getElementById("date").textContent =
        "Date: " + date;

    document.getElementById("clock").textContent =
        "Time: " + time;
}

// Update every second
setInterval(updateClock, 1000);

// Show immediately when page loads
updateClock();