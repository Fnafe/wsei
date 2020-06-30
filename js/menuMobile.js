var mobileMenuTemplate = document.querySelector("#mobile_menu_buttons");
var mobileMenuContainer = document.querySelector("#mobile_menu");
mobileMenuContainer.removeChild(mobileMenuTemplate);

var isShown = false;

// Invoked when player clicks the hamburger menu
function ShowMobileMenu(){
	if(isShown){
		mobileMenuContainer.removeChild(mobileMenuTemplate);
	}else{
		mobileMenuContainer.appendChild(mobileMenuTemplate);
		mobileMenuTemplate.classList += "animate_top_enter";
	}
	
	isShown = !isShown;
}

// Invoked when player chooses a position in hamburger menu
function HideMobileMenu(){
	
}