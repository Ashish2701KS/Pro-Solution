let toggleNavStatus = false;

let toggleNav = function(){
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarUl = document.querySelector(".nav-sidebar ul");
	let getSidebarTitle = document.querySelector(".nav-sidebar span");
	let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

	if (toggleNavStatus === false){
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "125px";
		getSidebar.style.backgroundColor = "#FFDB58";
		getSidebarTitle.style.opacity = "0.6";

		let arrayLength = getSidebarLinks.length;
		for(let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "1";
		}

		toggleNavStatus = true;
	}

	else if (toggleNavStatus === true){
		getSidebar.style.width = "60px";
		getSidebarTitle.style.opacity = "0";
		getSidebar.style.backgroundColor="transparent";

		let arrayLength = getSidebarLinks.length;
		for(let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "0";
		}

		getSidebarUl.style.visibility = "hidden";
		toggleNavStatus = false;
	}
}