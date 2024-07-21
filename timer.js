// Set your target date and time
const targetDate = new Date('2024-10-11T22:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now; // Calculate difference to count down

    if (timeDifference <= 0) {
        // Countdown has reached or passed targetDate
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Calculate days, hours, minutes, seconds
    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    // Update HTML elements with formatted values
    document.getElementById('days').textContent = formatTwoDigits(days);
    document.getElementById('hours').textContent = formatTwoDigits(hours);
    document.getElementById('minutes').textContent = formatTwoDigits(minutes);
    document.getElementById('seconds').textContent = formatTwoDigits(seconds);
}

// Function to add leading zeros
function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : number;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update countdown when page loads
updateCountdown();

