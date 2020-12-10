


function submitQuiz() {

  let points = 0;

  let answers = document.querySelectorAll("input[type='radio']:checked");

  console.log(answers.length);

  for (let i = 0; i < answers.length; i++) {
  points += parseInt(answers[i].value);
  console.log("test");
  }

  document.querySelector(".correct-answers").innerHTML = points;
  document.querySelector(".questions").classList.toggle("invisible");
  document.querySelector(".resultat").classList.toggle("invisible");

}

function resetQuiz() {
  
  document.querySelector(".resultat").classList.toggle("invisible");
  document.querySelector(".questions").classList.toggle("invisible");

  document.querySelector(".questions").reset();

}
