document.getElementById("camera-input").addEventListener("change", function(event) {
    // Process captured image here (preview, upload to server)
    const file = event.target.files[0];
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
}

// hover-info.js

function applyHoverInfoBehavior() {
  console.log('Hover info behavior applied!');
}

document.addEventListener('DOMContentLoaded', applyHoverInfoBehavior);

//VIEW DOCUMENT (LENS)

// Function to open the modal and update the image source
function openModal() {
  // Get the parent element of the lens icon
  var parentElement = document.querySelector('.hover-info').parentNode;
  // Find the input element within the parent element
  var input = parentElement.querySelector('.input');
  // Check if a file is selected
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          // Update the modal image source
          document.getElementById("modalImage").src = e.target.result;
          // Display the modal
          document.getElementById("myModal").style.display = "block";
      }
      reader.readAsDataURL(input.files[0]);
  } else {
      // Handle if no file is selected
      console.log("No file selected!");
  }
}





