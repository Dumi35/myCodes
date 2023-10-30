  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const square = entry.target.querySelectorAll('div');
    
            square.forEach(element=>{
                const value = element.getAttribute("data-animation")
        
                if (entry.isIntersecting) {
                element.classList.add(`${value}`);
                return; // if we added the class, exit the function
                }
        
                // We're not intersecting, so remove the class!
                element.classList.remove(`${value}`);
            })
        });
    });
    


//observer.observe(document.querySelector('.grid')[0]);
observer.observe(document.getElementsByClassName('grid')[0]); 
observer.observe(document.getElementsByClassName('flex')[1]); 



