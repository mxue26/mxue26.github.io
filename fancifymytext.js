
function bigger_text()
{
	alert("Hello, world!");
	
	document.getElementById("mytext").style.fontSize = "24pt";
}

function fancy()
{
	alert("Applying styles to the text area");
	
	var style 				= document.getElementById("mytext").style;
	
	style.fontWeight 		= "bold";
	style.color         	= "blue";
	style.textDecoration	= "underline"
}

function boring()
{
	alert("Removing styles from the text area");
	
	var style 				= document.getElementById("mytext").style;
	
	style.fontWeight 		= "normal";
	style.color         	= "black";
	style.textDecoration	= "none"
}

function moo()
{
	var textarea = document.getElementById("mytext");
	var text     = textarea.value;
	var splits	 = text.split(".");
	
	textarea.value				 = splits.join("-MOO.");
	textarea.style.textTransform = "uppercase";
}