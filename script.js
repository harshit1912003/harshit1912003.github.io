document.querySelectorAll('.section-title').forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('open');
    });
});
