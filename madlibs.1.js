var index = 0; //initlialize index variable
var replacements = []; //initlialize replacements variable
var sentence = []; //initlialize sentence variable
alert("Welcome to the mad libs game") //alerts a greeting
do{ //starts do while loop
	sentence[index] = prompt("Type in a word."); //prompts you to enter a word
	console.log(sentence[index]); 
	index++;
	console.log(index);
}
while(sentence[index-1] != "^");
