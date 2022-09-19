const observable = new IntersectionObserver((entries) => {
    entries.forEach(item => {
        console.log(item);
        if (item.isIntersecting) {
            item.target.classList.add('show');
        } else {
            item.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(item => observable.observe(item));