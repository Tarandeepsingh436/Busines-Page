console.log("Click the button to see our menu");
var button = document.createElement("button");
button.innerHTML = "Restaurant Statement";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  confirm("Getting on your sweet side!");
});