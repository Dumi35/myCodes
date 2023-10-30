

//observer.observe(document.querySelector('.grid')[0]);


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelectorAll('div');

        square.forEach(element=>{

            if (entry.isIntersecting) {
            element.classList.add('animate__fadeInUp');
            return; // if we added the class, exit the function
            }
    
            // We're not intersecting, so remove the class!
            element.classList.remove('animate__fadeInUp');
        })
    });
});

//observer.observe(document.querySelector('.grid')[0]);
observer.observe(document.getElementsByClassName('grid')[0]); 



function observeElementsWithAnimation(classNames) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                classNames.forEach(className => {
                    // Add the class to trigger the animation
                    entry.target.classList.add("animate__fadeInUp",className);
                });
                // Unobserve the element to stop observing once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // Use the viewport as the root
        threshold: 0.2 // Trigger animation when 20% of the element is visible
    });

    // Find all elements with the specified class names and observe them
    classNames.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
            observer.observe(element);
        });
    });
}

// Usage example
const classesToAnimate = ['grid'];
/* observeElementsWithAnimation(classesToAnimate); */
