document.getElementById("camera-input").addEventListener("change", function(event) {
    // Process captured image here (e.g., preview, upload to server)
    const file = event.target.files[0];
    // Access the captured image file: file.name, file.size, file.type, etc.
    // Handle processing and uploading using JavaScript techniques or server-side code.
  });

  document.getElementById('viewMoreBtn').addEventListener('click', function() {
    var content = document.querySelector('.content');
    content.style.maxHeight = content.style.maxHeight === '200px' ? null : '200px'; // Adjust the height accordingly
});