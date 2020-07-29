
function openNav() {
	if(screen.width<600){


  document.getElementById("mysidebar").style.width = "100%";
  var m;
  for(m=1;m<=5;m++)
  { var x="dp"+String(m);
  document.getElementById(x).style.width="100%";
  }
  
   
}

else{
	document.getElementById("mysidebar").style.width = "40%";
	
   var n;
  for(n=1;n<=5;n++)
  { var y="dp"+String(n);
  document.getElementById(y).style.width="100%";
  }
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
function vapt(){
	document.getElementById("sql").classList.toggle("show");
}

