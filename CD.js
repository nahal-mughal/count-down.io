const startDate = "12 February 2024 4:30 PM";
document.getElementById("start-date").innerText = startDate; // Display start date

const inputs = document.querySelectorAll("input");

function clock() {
    const start = new Date(startDate);
    const now = new Date();
    const diff = (now - start) / 1000; // Difference in seconds

    // calculation
    inputs[0].value = Math.floor(diff / 3600 / 24);  // days
    inputs[1].value = Math.floor(diff / 3600) % 24;  // hours
    inputs[2].value = Math.floor(diff / 60) % 60;    // minutes
    inputs[3].value = Math.floor(diff % 60);         // seconds
}

// Call the clock function every second
setInterval(clock, 1000);
