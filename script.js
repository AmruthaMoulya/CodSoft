document.querySelector('.booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    if (!from || !to) {
        alert('Please fill in both From and To fields.');
    } else {
        alert(`Searching flights from ${from} to ${to}...`);
    }
});
