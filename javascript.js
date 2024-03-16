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
  const hoverInfoElements = document.querySelectorAll('.hover-info');

  hoverInfoElements.forEach(element => {
    element.addEventListener('mouseover', function() {
      const dataInfo = this.dataset.info; 
      const tooltip = document.createElement('div');
      tooltip.classList.add('hover-info-tooltip'); 
      tooltip.textContent = dataInfo;

      
      const tooltipLeft = this.offsetLeft + this.clientWidth + 10; 
      const tooltipTop = this.offsetTop;

      tooltip.style.left = `${tooltipLeft}px`;
      tooltip.style.top = `${tooltipTop}px`;

      document.body.appendChild(tooltip);
    });

    element.addEventListener('mouseout', function() {
      const tooltips = document.querySelectorAll('.hover-info-tooltip');
      tooltips.forEach(tooltip => tooltip.remove());
    });
  });

  console.log('Hover info behavior applied!');
}


window.addEventListener('DOMContentLoaded', applyHoverInfoBehavior);



//VIEW DOCUMENT (LENS)

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("modalImage");
var modalImg = document.getElementById("modalImage");

function openModal() {
  modal.style.display = "block";
  modalImg.src = "RS_Decline_in_Driver_s_Licenses.jpg"; 
}

// Close the modal when the user clicks on <span> (x)
function closeModal() {
  modal.style.display = "none";
}





