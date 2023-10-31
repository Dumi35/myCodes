/* Animate on reaching element */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const square = entry.target.querySelectorAll('*');
    
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
    


observer.observe(document.getElementsByClassName('grid')[0]); 
observer.observe(document.getElementsByClassName('flex')[0]); 
observer.observe(document.getElementsByClassName('flex')[1]); 



/* Form validation */

//send the email to me


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('sv44reyXc3EV7BurZ');
})();


window.onload = function() {
  document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      //this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {

                console.log('SUCCESS!');
                emailSent.style.display="block"
                emailSent.textContent="Email sent successfully"
                document.querySelectorAll("input").forEach(input=>{
                  input.value="";
                })
                document.querySelectorAll("textarea").forEach(input=>{
                  input.value="";
                })
            }, function(error) {
                console.log('FAILED...', error);
                emailSent.textContent="Email failed to send"
        }); 
        
        
        
    });
}