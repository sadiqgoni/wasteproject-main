document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const challengeCards = document.querySelectorAll('.challenge-card');

    function showTab(tabName) {
        // Hide all challenge cards
        challengeCards.forEach(card => {
            if (card.dataset.category === tabName) {
                card.style.display = 'block';
                card.classList.add('active');
            } else {
                card.style.display = 'none';
                card.classList.remove('active');
            }
        });

        // Update active tab button
        tabButtons.forEach(btn => {
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            showTab(button.dataset.tab);
        });
    });

    // Show default tab (waste)
    showTab('waste');
});
