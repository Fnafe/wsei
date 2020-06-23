var elementsCounter = 0;

var rowTemplate = document.querySelector("#first_row").cloneNode(true);
var objContainer = document.querySelector("#newObjContainter");
var inputField = document.querySelector("#todo_input_text_field");

var selectedRow;

function AddNewElement(){
	var fontelloIcon = document.createElement("i");

	elementsCounter++;
	
	rowTemplate.id = elementsCounter + "-row";
	rowTemplate.querySelector("#row_id").innerHTML = elementsCounter;
	rowTemplate.querySelector("#assignee").innerHTML = "m.pietrzyk";
	rowTemplate.querySelector("#description").innerHTML = inputField.value;
	
	rowTemplate.querySelector("#finished").innerHTML = '<i class="icon-hourglass" style="color: #ffcc00;" onclick="OnFinishTaskClick(\'' + elementsCounter + "-row" + '\')"></i>';
	
	// "Edit / Remove" buttons
	// ***(the "inproper" way, cause firefox seems buggy on version 77.0.1 and doesn't fire the onclick event when using addListener)
	rowTemplate.querySelector("#edit_remove").innerHTML = '<i class="icon-pencil" onclick="OnEditRowClick(\'' + elementsCounter + "-row" + '\')"></i> <i class="icon-trash-empty" style="color: #cc0000;" onclick="OnRemoveRowClick(\'' + elementsCounter + "-row" + '\')"></i>';
	
	// Append new row to the container
	objContainer.appendChild(rowTemplate.cloneNode(true));
}

function OnFinishTaskClick(id){
	selectedRow = document.getElementById(id);
	var finishedIcon = selectedRow.querySelector(".icon-hourglass");
	finishedIcon.className = "icon-ok";
	finishedIcon.style.color = "#66ff66";
}

// invoked when user presses delete button on the row
function OnRemoveRowClick(id){
	var removedRow = document.getElementById(id);
	objContainer.removeChild(removedRow);
}

function OnEditRowClick(id){
	var editedRow = document.getElementById(id);
	editedRow.querySelector("#description").innerHTML = inputField.value;
}

// Create new element in DOM
/*
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
*/


// Assign a ranodm color to the element
function SetNewElementColor(element){
	var rVal = Math.random() * 255
	var gVal = Math.random() * 255
	var bVal = Math.random() * 255
	
	element.style.backgroundColor = "rgb("+ rVal + "," + gVal + ", " + bVal + ")"
}



















