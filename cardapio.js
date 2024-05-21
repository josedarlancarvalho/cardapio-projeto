function openSection(sectionName) {
    var i;
    var sections = document.getElementsByClassName("section");
    for (i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(sectionName).style.display = "block";
  }
  
 
function addItem(item) {
    var quantityElement = document.getElementById(item + '-quantity');
    var currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}


function removeItem(item) {
    var quantityElement = document.getElementById(item + '-quantity');
    var currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
        quantityElement.innerText = currentQuantity - 1;
    }
}
