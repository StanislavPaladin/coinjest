const faqCards = document.querySelectorAll('.faq-card');

// открытие и закрытие faq-карточке
faqCards.forEach(item => item.addEventListener('click', () => {
    if(item.classList.contains('active')) {
        faqCards.forEach(item => item.classList.remove('active'))
    } else {
        faqCards.forEach(item => item.classList.remove('active'))
        item.classList.toggle('active')
    }
}))

