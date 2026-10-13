(function() {
  //TODO
})();
let ex1_button = document.getElementById("ex1_button");
let ex1_content = document.getElementById("ex1_content");

let ex2_text = document.getElementById("ex2_text");


ex1_button.addEventListener("click", () => {
  ex1_content.innerText = "";
  for (let i = 0; i < 9; i++) {
    ex1_content.innerText += `${i},`;
  }
  ex1_content.innerText += "9";
});

function displayTextInEx2Content(text)
{
  let ex2_content = document.getElementById("ex2_content");
  ex2_content.innerText = text;
}

ex2_text.addEventListener("input",()=>{
   const numberRegex = /[0-9]/i;
   const letterRegex = /\p{L}/u;
   const specialCharRegex = /[^\p{L}\p{N}\s]/u;
  if(ex2_text.value.length!=9)
  {
    console.log(ex2_text.value);
    displayTextInEx2Content("Długość numeru musi być równa 9");
    return;
  }
  
  if(letterRegex.test(ex2_text.value))
  {
    displayTextInEx2Content("Numer nie może zawierać liter")
     return;
  }
  
  if(specialCharRegex.test(ex2_text.value))
  {
    displayTextInEx2Content("Numer nie może zawierać znaków specjalnych");
     return;
  }
 
  if(ex2_text.value.length==9 && numberRegex.test(ex2_text.value))
  {
    displayTextInEx2Content("Numer jest poprawny");
     return;
  }
})