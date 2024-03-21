// Function to handle clicking on the lens image for Secondary documentation
function viewSecondary() {
  // TODO: display secondary documentation
  console.log("Secondary documentation should be viewed"); // comment out when done
}

// Function to handle clicking on the lens image for KYC documentation
function viewKYC() {
  // TODO: display KYC
  console.log("KYC should be viewed"); // comment out when done
}

// Function to show tooltip on hover for lens images
function showTooltip(element) {
  const dataInfo = element.dataset.info;
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = dataInfo;

  const tooltipLeft = element.offsetLeft + element.clientWidth + 10;
  const tooltipTop = element.offsetTop;

  tooltip.style.left = `${tooltipLeft}px`;
  tooltip.style.top = `${tooltipTop}px`;

  document.body.appendChild(tooltip);

  // Store reference to tooltip in the element itself
  element.hoverTooltip = tooltip;
}

// Function to hide tooltip when mouse moves out for lens images
function hideTooltip() {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => tooltip.remove());
}

// Remove tooltip when lens image is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('hover-info') && event.target.hoverTooltip) {
    event.target.hoverTooltip.remove();
  }
});


function testFunc(){
  console.log("it works")
}

function toggleDropdown() {
  var dropdown = document.getElementById("kycDropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown 
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

var modalLink = document.getElementById("modalLink");

function openModal() {
  // Get the uploaded file input element
  var fileInput = document.getElementById("fileInput");
  
  // Check if a file is selected
  if (fileInput.files.length > 0) {
    // Get the first file from the input
    var file = fileInput.files[0];
    
    // Create a URL for the uploaded file
    var fileURL = URL.createObjectURL(file);
    
    // Set the modal link href to the uploaded file URL with target="_blank"
    modalLink.href = fileURL;
    modalLink.target = "_blank"; // Open in a new tab or window
    
    // Trigger click event on the link to open it in a new page
    modalLink.click();
  } else {
    // If no file is selected, alert the user
    alert("Please upload a file first.");
  }
}





