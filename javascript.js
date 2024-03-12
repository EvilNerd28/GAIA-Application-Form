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

function openImage() {
  // Get the modal and image elements
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  // Set the source for the modal image
  modalImage.src = 'RS_Decline_in_Driver_s_Licenses.jpg'; // Replace with the actual path

  // Display the modal
  modal.style.display = "block";
}

function closeImage() {
  // Get the modal element and hide it
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


