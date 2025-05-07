document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if(mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            console.log('Menu button clicked');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open'); 
        });
    } else {
        console.error('One or more elements not found:', {mobileMenuBtn, mainNav});
    }

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});