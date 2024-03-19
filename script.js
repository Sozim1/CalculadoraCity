// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const page = card.getAttribute('data-calculator');
            window.location.href = page + '.html';
        });
    });
});
