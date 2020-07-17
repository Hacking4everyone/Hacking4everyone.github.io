
function openNav() {
	if(screen.width<600){


  document.getElementById("mysidebar").style.width = "100%";
}
else{
	document.getElementById("mysidebar").style.width = "40%";

}
}

function closeNav() {
  document.getElementById("mysidebar").style.width = "0%";
}
function drop(){
	document.getElementById("get_started").classList.toggle("show");
	
}
function information(){
	document.getElementById("inform").classList.toggle("show");
	
}

