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

function toggleDropdown() {
  var dropdown = document.getElementById("kycDropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.highlight')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

function redirectOnChange() {
  var selectElement = document.getElementById("customerType");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;

  if (selectedValue === "New-Application") {
      window.location.href = "new.html";
  }
  // Add other cases if needed
}
