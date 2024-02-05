let button = document.querySelector(".generate-button");
let value = document.querySelector(".tedxaubg-value");
const tedxaubgValues = ["TEAMWORK","FRIENDSHIP", "COMMUNITY", "DIVERSITY", "DISCUSSION", "IDEAS"];
let pointer = 0; 

// HINT: Follow the below instructions
// The following code does something when the button is clicked
button.addEventListener("click", () => {
// You shall increase the pointer value 1 at a time so that it traverses the tedxaubgValues array
pointer = pointer + 1; //change only this line
value.innerHTML = tedxaubgValues[pointer % tedxaubgValues.length];
});