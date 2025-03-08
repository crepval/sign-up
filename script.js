document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        
        if (!name) {
            alert('Name is required');
            event.preventDefault();
        } else if (!email) {
            alert('Email is required');
            event.preventDefault();
        } else if (!age || age <= 0) {
            alert('Please enter a valid age');
            event.preventDefault();
        }
    });
});
