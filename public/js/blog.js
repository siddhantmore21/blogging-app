document.addEventListener('DOMContentLoaded', function() {

    const addBlogForm = document.getElementById('addBlogForm');
    addBlogForm.addEventListener('submit', function(event) {

        event.preventDefault();

        // const email = addBlogForm.querySelector('input[name="email"]').value.trim();
        // const password = addBlogForm.querySelector('input[name="password"]').value.trim();


        // // Validate Email
        // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if (!emailRegex.test(email)) {
        //     alert('Please enter a valid email address.');
        //     return;
        // }


        // // Validate Password
        // if (password === '') {
        //     alert('Please enter a password.');
        //     return;
        // }
        

        // If all validations pass, you can submit the form or perform other actions here
        addBlogForm.submit();  // Uncomment this line to submit the form
    });

    function titleToSlug(title) {
        return title.toLowerCase().replace(/\s+/g, '-');
    }
    
    const titleInput = document.getElementById('title');
    const slugInput = document.getElementById('slug');
    const slugSpan = document.getElementById('slugSpan');

    titleInput.addEventListener('input', function() {
        const title = titleInput.value;
        const slug = titleToSlug(title);
        slugInput.value = slug;
        slugSpan.innerText = slug;
    });
    
});
