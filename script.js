document.getElementById('create-blog-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        alert(`Blog "${title}" created successfully!`);
        document.getElementById('create-blog-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
