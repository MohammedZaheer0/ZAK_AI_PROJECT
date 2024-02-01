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

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let Index = event.resultIndex;
    let transcript = event.results[Index][0].transcript;
    Input.value = transcript;
    takeCommand(transcript.toLowerCase());
};

Mic.addEventListener("click", () => {
    Input.value = "Listening...";
    recognition.start();
});


function takeCommand(message){
    if(message.includes("hey") || message.includes("hello") || message.includes("hello zak ai") || message.includes("hey zak ai")){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes("open google")){
        window.open("https://www.google.com","_blank");
        speak("Opening Google")
    }
    else if(message.includes("open linkedin")){
        window.open("https://www.linkedin.com","_blank");
        speak("Opening LinkedIn")
    }
    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com","_blank");
        speak("Opening YouTube")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com","_blank");
        speak("Opening Facebook")
    }
    else if(message.includes("open instagram")){
        window.open("https://www.instagram.com","_blank");
        speak("Opening Instagram")
    }
    else if(message.includes("what is") || message.includes("who is") || message.includes("where is ")){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");
        let finalText = "This is What i found on internet regarding"+message;
        speak(finalText)
    }

    else if(message.includes("wikipedia")){
        window.open(`https://www.wikipedia.com/search?q=${message.replace("wikipedia", " ")}`,"_blank");
        let finalText = "This is What i found on wikipedia regarding"+message;
        speak(finalText)
    }

    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour: "numeric",minute:"numeric",second:"numeric"})
        let finalText = time;
        speak(finalText)
    }


    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{month: "numeric",day:"numeric"})
        let finalText = date;
        speak(finalText)
    }

    else if(message.includes("calculator")){
        window.open('Calculator:///');
        let finalText = "Opening Calculator";
        speak(finalText);
    }

    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");
        let finalText = "I found some information for "+message + "on google";
        speak(finalText)
    }
}