$(document).ready(function(){
    
    let introductionText = "Greetings! My name is Janne, I am a web-application developer from Oulu, Finland!";
    let welcomeText = "This is my portfolio. Welcome!"; 

    new Typed('#greeting', {
        strings: [introductionText, welcomeText],
        typeSpeed: 20,
        backDelay: 1500,
        loop: true,
    });
});
