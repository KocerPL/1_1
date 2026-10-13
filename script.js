(function() {
  //TODO
})();
let ex1_button = document.getElementById("ex1_button");
let ex1_content = document.getElementById("ex1_content");

ex1_button.addEventListener("click", () => {
  ex1_content.innerText = "";
  for (let i = 0; i < 9; i++) {
    ex1_content.innerText += `{i},`;
  }
  ex1_conent.innerText += "9";
})