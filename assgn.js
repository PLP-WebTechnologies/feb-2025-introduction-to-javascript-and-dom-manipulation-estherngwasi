// Change the text content
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('main-title').textContent = 'You clicked the button!';
  });
  
  // Change the CSS style
  document.getElementById('change-style-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0e68c'; 
  });
  
  // Add a new element
  document.getElementById('add-element-btn').addEventListener('click', function() {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Exploring new tech tools 🛠️';
    newDiv.id = 'new-div';
    newDiv.style.marginTop = '20px';
    newDiv.style.padding = '10px';
    newDiv.style.backgroundColor = '#add8e6'; 
    document.body.appendChild(newDiv);
  });
  
  // Remove the new element
  document.getElementById('remove-element-btn').addEventListener('click', function() {
    let newDiv = document.getElementById('new-div');
    if (newDiv) {
      newDiv.remove();
    }
  });
  