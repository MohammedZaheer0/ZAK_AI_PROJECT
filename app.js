let Mic = document.querySelector(".mic");
let Input = document.querySelector(".input");

function speak(text){
    let Text_Speak = new SpeechSynthesisUtterance(text);

    Text_Speak.rate =  1;
    Text_Speak.volume = 1;
    Text_Speak.pitch = 1;

    window.speechSynthesis.speak(Text_Speak);
}

function wishMe(){
    let Day = new Date();
    let Hour = Day.getHours();

    if(Hour>=0 && Hour<12){
        speak("Hello Good Morning");
    }
    else if(Hour>12 && Hour<17){
        speak("Hello Good AfterNoon");
    }
    else{
        speak("Hello Good Evening");
    }
}


window.addEventListener("load",()=>{
    speak("Initializing ZAK AI....");
    wishMe();
});

let SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    let Index =  event.resultIndex;
    let transcript =  event.results[Index][0].transcript;
    Input.value = transcript;
    takeCommand(transcript.toLowerCase());
}

Mic.addEventListener("click",()=>{
    Input.value = "Listening...";
    recognition.start();
});


function takeCommand(){

}