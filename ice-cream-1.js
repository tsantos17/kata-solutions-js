//initilaize variables
inarray = false;
var flavors = ["chocolate","vanilla","strawberry", "coffee","pistachio"];
//Set a string variable equal to a value with a prompt. 
//create array with all regular flavors
var cone = [];
flavorlist = flavors.length;
alert("Here are our flavors: "+flavors+"");
for(scoop=1; scoop<4; scoop++){
	do{
		var flavor =prompt("Enter an ice cream flavor");
		
		for(index = 0; index < flavorlist; index++){
			if (flavor == flavors[index]){
				inarray = true;
			}
		}
			if (inarray == false){
				alert(flavor+" is not a flavor.");
			}	
		if (flavor=="strawberry"){
		alert("All out of flavor "+flavor);
		inarray = false;
		  }
	}
	while (inarray == false)
alert("Here's your "+flavor+" scoop.");
cone[scoop-1]=flavor;
}
coneString = cone.join(' ');

alert("Enjoy your cone with " +coneString.toString());