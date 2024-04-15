document.addEventListener('DOMContentLoaded', function() {

    const addBlogForm = document.getElementById('addBlogForm');
    addBlogForm.addEventListener('submit', function(event) {

        event.preventDefault();

        // Title validation
        const title = document.getElementById('title').value;
        
        if (title.length < 10 || title.length > 250) {
            alert('Title must be between 10 and 250 characters.');
            return;
            
        }

        // Description validation
        const description = document.getElementById('description').value;
        
        if (description.length < 50 || description.length > 500) {
           alert('Description must be between 50 and 500 characters.');
           return;
        }
        
        // Content validation
        const content = document.getElementById('content').value;
        
        if (content.length < 1000 || content.length > 50000) {
            alert('Content must be between 1000 and 50000 characters.');
            return;
        }

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
