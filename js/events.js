var elementsCounter = 0;

// Create new element in DOM
function AddNewElement(){
	var newRemovableElement = document.createElement("div");
	newRemovableElement.className = "removable_element"
	
	SetNewElementColor(newRemovableElement);
	
	var exitButton = document.createElement("button");
	exitButton.className = "exit_button";
	exitButton.appendChild(document.createTextNode("X"));
	exitButton.id = elementsCounter;
	exitButton.onclick = function RemoveElementOfId(){
		var objContainer = document.getElementById("newObjContainter");
		var elementToRemove = document.getElementById("el"+this.id);
		
		objContainer.removeChild(elementToRemove);
	}
	
	newRemovableElement.appendChild(exitButton);
	newRemovableElement.id = "el" + elementsCounter;
	
	var objContainer = document.getElementById("newObjContainter");
	objContainer.appendChild(newRemovableElement);
	
	elementsCounter++;
}

// Assign a ranodm color to the element
function SetNewElementColor(element){
	var rVal = Math.random() * 255;
	var gVal = Math.random() * 255;
	var bVal = Math.random() * 255;
	
	element.style.backgroundColor = "rgb("+ rVal + "," + gVal + ", " + bVal + ")";
}



















