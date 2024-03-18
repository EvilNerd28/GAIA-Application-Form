/* NOTES:
 * The two functions below have been commented out as they call things that have not been initialized yet
 * Make sure the script is run at the end of the body, this will at least make sure everything is initialized before it is called
 * The functions have been replaced by functions with onclicks instead (bad process, simple design), as shown below
 * Finish view secondary and view KYC to actually implement the wanted functionality
*/

/* REMOVED:
document.getElementById("camera-input").addEventListener("change", function(event) {
    // Process captured image here (preview, upload to server)
    const file = event.target.files[0];
});

document.getElementById('viewMoreBtn').addEventListener('click', function() {
  //console.log("ran view more")
  var content = document.querySelector('.content');
  content.style.maxHeight = content.style.maxHeight === '200px' ? null : '200px'; // Adjust the height accordingly
});
*/

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

var modal = document.getElementById("myModal");

var img = document.getElementById("modalImage");
var modalImg = document.getElementById("modalImage");

function openModal() {
  modal.style.display = "block";
  modalImg.src = "RS_Decline_in_Driver_s_Licenses.jpg"; 
}

// Closing the modal
function closeModal() {
  modal.style.display = "none";
}




