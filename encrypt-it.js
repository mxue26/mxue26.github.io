/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
	console.log("Window loaded!");
	
	const button = document.getElementById("encrypt-it");
	const reset  = document.getElementById("reset");
	
	button.addEventListener("click", encrypt);
	reset.addEventListener("click", reset_text_areas);
  }

  

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function reset_text_areas()
  {
	  let input 			= document.getElementById("input-text");
	  let output			= document.getElementById("result");
	  
	  input.value 			= "";
	  output.textContent	= "";
  }
  
  function shift_cypher(input)
  {
	  let result = "";
	  
	  for (let index = 0; index < input.length; index++)
	  {
		  if ((input[index] < 'a') || (input[index] > 'z'))
			  result += input[index];
		  else if (input[index] == 'z')
			  result += 'a';
		  else
		  {
			  let letter = (input.charCodeAt(index) + 1);
			  
			  result += String.fromCharCode(letter);
		  }
	  }
	  
	  return result;
  }
  
  function random_cypher(input)
  {
	  const chars	= "abcdefghijklmnopqrstuvwxyz";
	  let   result 	= "";
	  
	  for (let index = 0; index < input.length; index++)
	  {
		  if ((input[index] < 'a') || (input[index] > 'z'))
			  result += input[index];
		  else
		  {  
			  result += chars.charAt(Math.floor(Math.random() * chars.length));
		  }
	  }
	  
	  return result;
  }
  
  function encrypt()
  {
	  console.log("Button clicked!");
	  
	  let input 	= document.getElementById("input-text").value.toLowerCase();
	  let output	= document.getElementById("result");
	  let uppercase	= document.getElementById('all-caps').checked;
	  let algorithm	= document.getElementById('cipher-type').value;
	  let size		= document.querySelector('input[name="text-size"]:checked').value
	  let result	= (algorithm === "shift") ? shift_cypher(input) : random_cypher(input);
	  
	  if (uppercase)
		  result = result.toUpperCase();
	  
	  output.style.fontSize	= size;
	  output.textContent 	= result;
  }

})();
