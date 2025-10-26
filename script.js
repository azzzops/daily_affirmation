let df = [
  "Asking for help is a sign of self-respect and self-awareness",
  "changing my mind is a strength, not a weakness",
  "every decision i make is supported by my whole and inarguable experience",
  "i affirm and encourage others, as i do myself",
  "i alone hold the truth of who i am",
  "i alone hold the truth of who i am",
  "I am allowed to feel good",
  "i am doing the work that works for me",
  "I am good and getting better",
  "I am held and supported by those who love me"
];

let text = document.getElementById("display_text");
function showAffirm(){
    let indexText = df[Math.floor(Math.random() * df.length)];
    text.innerHTML = indexText.charAt(0).toUpperCase() + indexText.slice(1);
}
