document.querySelector('.md\\:hidden button').addEventListener('click', function() {

    const navLinks = document.querySelector('.md\\:hidden').parentElement.querySelector('.md\\:flex');

    navLinks.classList.toggle('hidden');
});
