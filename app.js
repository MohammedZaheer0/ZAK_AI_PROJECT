let Mic = document.querySelector(".mic");
let Input = document.querySelector(".input");

function speak(text){
    let Text_Speak = new SpeechSynthesisUtterance(text);
    Text_Speak.rate =  1;
    Text_Speak.volume = 1;
    Text_Speak.pitch = 1;
    window.speechSynthesis.speak(Text_Speak);
}
window.addEventListener("load",()=>{
    speak("Initializing ZAK AI....");
});