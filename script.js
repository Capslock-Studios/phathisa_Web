  
            let total = 0;
          
            function addToDisplay(amount) {
              total += amount;
              document.getElementById('display').textContent = "Total: R" + total;
            }
          
            function payNow() {
              // Display modal
              document.getElementById('myModal').style.display = "block";
            }
          
            function closeModal() {
              // Close modal
              document.getElementById('myModal').style.display = "none";
            }
          
            function resetTotal() {
              // Reset total to 0
              total = 0;
              document.getElementById('display').textContent = "Total: R" + total;
            }

            function toggleLeftMenu() {
              const menu = document.getElementById("menu");
              menu.classList.toggle("show-menu");
            }
        
            function toggleRightMenu() {
              const rightMenu = document.getElementById("right-menu");
              rightMenu.classList.toggle("right-show-menu");
            }
            function toggleMenu() {
              const bottom_menu = document.getElementById("bottom-menu");
              bottom_menu.classList.toggle("bottom-show-menu");
            }
        
            let startY;
          
            function handleTouchStart(event) {
              if (window.innerWidth <= 600) {
                startY = event.touches[0].clientY;
              }
            }
          
            function handleTouchMove(event) {
              if (window.innerWidth <= 600) {
                const scrollableWrapper = document.getElementById('scrollableWrapper');
                if (event.touches[0].clientY < startY) {
                  // Swiping up
                  scrollableWrapper.style.height = '92%';
                } else if (event.touches[0].clientY > startY) {
                  // Swiping down
                  scrollableWrapper.style.height = '85px';
                }
              }
            }
          
          
            function handleTouchEnd() {
              startY = null;
            }
          
            function toggleHeight() {
              if (window.innerWidth > 600) {
                const scrollableWrapper = document.getElementById('scrollableWrapper');
                if (scrollableWrapper.classList.contains('clicked')) {
                  scrollableWrapper.classList.remove('clicked');
                } else {
                  scrollableWrapper.classList.add('clicked');
                }
              }
            }
          
            function stopPropagation(event) {
              event.stopPropagation();
            }

            // Your JavaScript code
        
            // Function to make an element draggable
            function dragElement(elmnt) {
              var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
              if (document.getElementById(elmnt.id + "header")) {
                // If a header is present, use it to move the DIV
                document.getElementById(elmnt.id + "header").ontouchstart = dragTouchStart;
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
              } else {
                // Otherwise, move the DIV from anywhere inside it
                elmnt.ontouchstart = dragTouchStart;
                elmnt.onmousedown = dragMouseDown;
              }
        
              function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // Get the mouse cursor position at startup
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // Call a function whenever the cursor moves
                document.onmousemove = elementDrag;
              }
        
              function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // Calculate the new cursor position
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // Set the element's new position
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
              }
        
              function closeDragElement() {
                // Stop moving when the mouse button is released
                document.onmouseup = null;
                document.onmousemove = null;
              }
        
              function dragTouchStart(e) {
                var touch = e.targetTouches[0];
                var moveOffsetX = touch.clientX - parseInt(elmnt.style.left);
                var moveOffsetY = touch.clientY - parseInt(elmnt.style.top);
        
                document.ontouchmove = function(e) {
                  var touch = e.targetTouches[0];
                  elmnt.style.left = (touch.clientX - moveOffsetX) + "px";
                  elmnt.style.top = (touch.clientY - moveOffsetY) + "px";
                };
              }
            }
        
            // Call the dragElement function with the desired element
            dragElement(document.getElementById("mydiv"));
        
              function scrollToBox(index) {
                const boxContainer = document.querySelector('.box-container');
                const boxes = document.querySelectorAll('.box');
                const boxWidth = boxes[0].offsetWidth;
                boxContainer.scrollLeft = index * boxWidth;
                setActiveDot(index);
              }
          
              function setActiveDot(index) {
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, i) => {
                  if (i === index) {
                    dot.classList.add('active');
                  } else {
                    dot.classList.remove('active');
                  }
                });
              }
              function toggleDropdown(index) {
                var dropdownContent = document.getElementById('dropdown-content-' + index);
                dropdownContent.classList.toggle('active');
                // Close other dropdowns
                var dropdowns = document.querySelectorAll('.dropdown-content');
                dropdowns.forEach(function(dropdown) {
                  if (dropdown.id !== 'dropdown-content-' + index) {
                    dropdown.classList.remove('active');
                  }
                });
              }
              function showDiv(divNumber) {
                var allDivs = document.querySelectorAll('.div-content');
                allDivs.forEach(function(div) {
                  div.classList.add('hidden');
                });
                var selectedDiv = document.getElementById('div' + divNumber);
                selectedDiv.classList.remove('hidden');
              }
            
              function scrollToNext() {
                var visibleDiv = document.querySelector('.div-content:not(.hidden)');
                var nextDiv = visibleDiv.nextElementSibling;
                if (nextDiv) {
                  nextDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
              }
          // Get references to all buttons
          var businessButton = document.getElementById("businessButton");
          var homeButton = document.getElementById("homeButton");
          var aboutButton = document.getElementById("aboutButton");
          var servicesButton = document.getElementById("servicesButton");
          var contactButton = document.getElementById("contactButton");
        
          // Add event listeners to each button
          businessButton.addEventListener("click", function() {
            window.location.href = "./business.html";
          });
        
          healthButton.addEventListener("click", function() {
            window.location.href = "./health.html";
          });
        
          parkingButton.addEventListener("click", function() {
            window.location.href = "./parking.html";
          });
        
          deliveryButton.addEventListener("click", function() {
            window.location.href = "./delivery.html";
          });
        
          educationButton.addEventListener("click", function() {
            window.location.href = "./education.html";
          });
        