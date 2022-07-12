var button = document.querySelectorAll("button");

var audio = new Audio("sounds/crash.mp3");

function PlayingSoung(sound)
{
    audio = new Audio(sound);
    audio.play();
}

function MakeSound(key)
{
    switch (key)
    {
        case "w":
            PlayingSoung("sounds/tom-1.mp3");
            break;
        case "a":
            PlayingSoung("sounds/tom-2.mp3");
            break;
        case "s":
            PlayingSoung("sounds/tom-3.mp3");
            break;
        case "d":
            PlayingSoung("sounds/tom-4.mp3");
            break;
        case "j":
            PlayingSoung("sounds/snare.mp3");
            break;
        case "k":
            PlayingSoung("sounds/crash.mp3");
            break;
        case "l":
            PlayingSoung("sounds/kick-bass.mp3")
            break;
    }
}

function ButtonAnimation(key)
{
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

button.forEach(element => {
    element.addEventListener("click", function () {

        var button = this.innerHTML;

        MakeSound(button);
        ButtonAnimation(button);
    });
});

document.addEventListener("keypress", function(event) {

    MakeSound(event.key);
    ButtonAnimation(event.key);
});