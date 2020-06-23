var mobileMenuTemplate = document.querySelector("#mobile_menu_buttons");
var mobileMenuContainer = document.querySelector("#mobile_menu");
mobileMenuContainer.removeChild(mobileMenuTemplate);

// Invoked when player clicks the hamburger menu
function ShowMobileMenu(){
	//document.querySelector("#mobile_menu").style.visibility = "visible";
	//document.querySelector("#mobile_menu").style.webkitAnimationPlayState = "running";
	mobileMenuContainer.appendChild(mobileMenuTemplate);
	mobileMenuTemplate.classList += "animate_top_enter";
}

// Invoked when player chooses a position in hamburger menu
function HideMobileMenu(){
	
}