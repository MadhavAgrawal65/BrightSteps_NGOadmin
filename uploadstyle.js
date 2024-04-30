document.getElementById('resourceUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle resource upload
    const title = document.getElementById('resourceTitle').value;
    const file = document.getElementById('resourceFile').files[0];
    if (title && file) {
        alert(`Resource "${title}" uploaded!`);
        // You can send the file to the server for processing here
    } else {
        alert('Please provide a title and select a file to upload.');
    }
});
