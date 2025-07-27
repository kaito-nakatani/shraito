// Q&A Collapsible Functionality
function toggleAnswer(questionElement) {
    const qaItem = questionElement.parentElement;
    const answer = qaItem.querySelector('.qa-answer');
    const icon = questionElement.querySelector('.qa-icon');
    
    if (answer.style.display === 'block') {
        // Close answer
        answer.style.display = 'none';
        icon.textContent = '+';
        qaItem.classList.remove('active');
    } else {
        // Close all other answers first
        const allItems = document.querySelectorAll('.qa-item');
        allItems.forEach(item => {
            const otherAnswer = item.querySelector('.qa-answer');
            const otherIcon = item.querySelector('.qa-icon');
            otherAnswer.style.display = 'none';
            otherIcon.textContent = '+';
            item.classList.remove('active');
        });
        
        // Open this answer
        answer.style.display = 'block';
        icon.textContent = '−';
        qaItem.classList.add('active');
    }
}

// Initialize Q&A functionality
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all answers are closed initially
    const answers = document.querySelectorAll('.qa-answer');
    answers.forEach(answer => {
        answer.style.display = 'none';
    });
});
