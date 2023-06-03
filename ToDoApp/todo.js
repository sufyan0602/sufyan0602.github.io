function displayTime() {
    const element = document.getElementById("datendtime");
    const now = new Date();
    const datetime = now.toLocaleString();
    element.innerHTML = datetime;
  }

  setInterval(displayTime, 1000);

  function addText(event) {
    if (event.keyCode === 13 || event.type === 'click') { // Check if the Enter key was pressed or the button was clicked
      if (event.type === 'click') {
        event.preventDefault(); // Prevent the default behavior (submitting the form) when the button is clicked
      }
  
      var input = document.getElementById("myInput").value.trim();
      var output = document.getElementById("output");
      var checkbox = document.createElement("input");
      var dueDateInput = document.createElement("input");
      let addduedate = document.getElementById("ifdate").checked;

      checkbox.type = "checkbox";
      checkbox.name = "myCheckbox";
  
      dueDateInput.type = "date";
      dueDateInput.name = "myDueDate";
  
      if (input === '') {
        alert('Please enter a to-do item');
        return;
      }
  
      if (addduedate) {
        var label = document.createElement("label");
        label.style.display = "block";
        label.style.font = "bold";
        label.style.color = "green";
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(input));
        label.appendChild(dueDateInput);
        output.appendChild(label);
    
        document.getElementById("myInput").value = " ";
      }
      else {
        var label = document.createElement("label");
        label.style.display = "block";
        label.style.font = "bold";
        label.style.color = "green";
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(input));
        output.appendChild(label);
    
        document.getElementById("myInput").value = " ";
      }
    
    }
  }
  
  function downloadList() {
    var items = [];
    var labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
      var itemDescription = labels[i].childNodes[1].textContent;
      var dueDate = labels[i].childNodes[2].value;
      if (itemDescription !== '') {
        if (dueDate !== '') {
          items.push(itemDescription + ' (Due: ' + dueDate + ')');
        } else {
          items.push(itemDescription);
        }
      }
    }
    var data = items.join("\n\n"); // add a blank line between items for clarity
    var file = new Blob([data], {type: "text/plain"});
    var url = URL.createObjectURL(file);
    var link = document.createElement("a");
    link.download = "YourList.txt";
    link.href = url;
    link.click();
  }
  
  
  function clearChecked() {
    var checkboxes = document.getElementsByName("myCheckbox");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxes[i].parentNode.remove();
      }
    }
  }

  function clearall() {
    var output = document.getElementById("output");
    output.innerHTML = "";
  }

  