//const { response } = require("express"

if (document.readyState !== "loading") {
  console.log("Document is ready");
  //initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting!");
    //initializeCode();
  });
}

//Set up the button
const button = document.getElementById("submit-data");
button.addEventListener("click", sendInput);

function sendInput() {
  const inputField = document.getElementById("input-text");

  const dataToSend = inputField.value;

  fetch("http://localhost:3000/list", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: '{ "text": "' + dataToSend + '" }',
  })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
    });

  fetch("http://localhost:3000/list")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
