// DECLARING VARIABLES
const rule = document.getElementById("rule");
const cross = document.getElementById("cross");
let val = 10;
const options = ["red", "blue", "yellow", "cyan", "purple"];

// ONCLICK RULE BUTTON
rule.addEventListener("click", () => {
    document.getElementById('first').classList.remove("visible");
    document.getElementById('first').classList.add("guide");
    document.querySelector('.area').classList.add("opacity");

});

// ONCLICK CROSS ICON
cross.addEventListener("click", () => {
    document.getElementById('first').classList.add("visible");
    document.getElementById('first').classList.remove("guide");
    document.querySelector('.area').classList.remove("opacity");

});

// DECIDING USERCHOICE AND BOTCHOICE
for (var i = 0; i <= 4; i++) {
    const userChoice = document.querySelectorAll(".icon")[i];
    userChoice.addEventListener("click", () => {
        const botChoice = document.querySelectorAll(".icon")[Math.floor(Math.random() * 5)];

        document.querySelector(".options").classList.add("visible");
        document.querySelector(".final").classList.remove("visible");

        for (var j = 0; j <= options.length; j++) {
            if (userChoice.classList.contains(options[j])) {
                var user = options[j];
            }

            if (botChoice.classList.contains(options[j])) {
                var bot = options[j];
            }
        }

        document.querySelector(".player").style.position = "static";
        document.querySelector(".bot").style.position = "static";
        document.querySelector(".player").classList.add("icon");
        document.querySelector(".player img").classList.add("sign");
        document.querySelector(".bot").classList.add("icon");
        document.querySelector(".bot img").classList.add("sign");
        compare(user, bot);

        // USERCHOICE:->
        switch (user) {
            case "red":
                document.querySelector(".player").classList.add("red");
                document.querySelector(".player").classList.remove("blue", "yellow", "cyan", "purple");
                document.querySelector(".player img").classList.add("lizRo");
                document.querySelector(".player img").src = "images/icon-rock.svg";
                break;

            case "blue":
                document.querySelector(".player").classList.add("blue");
                document.querySelector(".player").classList.remove("red", "yellow", "cyan", "purple");
                document.querySelector(".player img").classList.remove("lizRo");
                document.querySelector(".player img").src = "images/icon-paper.svg";
                break;

            case "yellow":
                document.querySelector(".player").classList.add("yellow");
                document.querySelector(".player").classList.remove("red", "blue", "cyan", "purple");
                document.querySelector(".player img").classList.remove("lizRo");
                document.querySelector(".player img").src = "images/icon-scissors.svg";
                break;

            case "cyan":
                document.querySelector(".player").classList.add("cyan");
                document.querySelector(".player").classList.remove("red", "blue", "yellow", "purple");
                document.querySelector(".player img").classList.remove("lizRo");
                document.querySelector(".player img").src = "images/icon-spock.svg";
                break;

            case "purple":
                document.querySelector(".player").classList.add("purple");
                document.querySelector(".player").classList.remove("red", "blue", "yellow", "cyan");
                document.querySelector(".player img").classList.add("lizRo");
                document.querySelector(".player img").src = "images/icon-lizard.svg";
                break;
        }

        // BOTCHOICE:->
        switch (bot) {
            case "red":
                document.querySelector(".bot").classList.add("red");
                document.querySelector(".bot").classList.remove("blue", "yellow", "cyan", "purple");
                document.querySelector(".bot img").classList.add("lizRo");
                document.querySelector(".bot img").src = "images/icon-rock.svg";
                break;

            case "blue":
                document.querySelector(".bot").classList.add("blue");
                document.querySelector(".bot").classList.remove("red", "yellow", "cyan", "purple");
                document.querySelector(".bot img").classList.remove("lizRo");
                document.querySelector(".bot img").src = "images/icon-paper.svg";
                break;

            case "yellow":
                document.querySelector(".bot").classList.add("yellow");
                document.querySelector(".bot").classList.remove("red", "blue", "cyan", "purple");
                document.querySelector(".bot img").classList.remove("lizRo");
                document.querySelector(".bot img").src = "images/icon-scissors.svg";
                break;

            case "cyan":
                document.querySelector(".bot").classList.add("cyan");
                document.querySelector(".bot").classList.remove("red", "blue", "yellow", "purple");
                document.querySelector(".bot img").classList.remove("lizRo");
                document.querySelector(".bot img").src = "images/icon-spock.svg";
                break;

            case "purple":
                document.querySelector(".bot").classList.add("purple");
                document.querySelector(".bot").classList.remove("red", "blue", "yellow", "cyan");
                document.querySelector(".bot img").classList.add("lizRo");
                document.querySelector(".bot img").src = "images/icon-lizard.svg";
                break;
        }
    });
}

// COMPARING THE CHOICES AND DECLARING RESULT 
function compare(user, bot) {
    if (user === bot) {
        document.querySelector(".declare h1").innerText = "DRAW";
    }

    if ((user === 'yellow' && bot === 'blue') || (user === 'blue' && bot === 'red') || (user === 'red' && bot === 'purple') || (user === 'purple' && bot === 'cyan') || (user === 'cyan' && bot === 'yellow') || (user === 'yellow' && bot === 'purple') || (user === 'purple' && bot === 'blue') || (user === 'blue' && bot === 'cyan') || (user === 'cyan' && bot === 'red') || (user === 'red' && bot === 'yellow')) {
        val++;
        document.querySelector(".declare h1").innerText = "YOU WIN";
        setTimeout(() => {
            document.querySelector('.player').classList.add("win");
        }, 200);
        document.querySelector('.bot').classList.remove("win");
    }

    if ((bot === 'yellow' && user === 'blue') || (bot === 'blue' && user === 'red') || (bot === 'red' && user === 'purple') || (bot === 'purple' && user === 'cyan') || (bot === 'cyan' && user === 'yellow') || (bot === 'yellow' && user === 'purple') || (bot === 'purple' && user === 'blue') || (bot === 'blue' && user === 'cyan') || (bot === 'cyan' && user === 'red') || (bot === 'red' && user === 'yellow')) {
        val--;
        document.querySelector(".declare h1").innerText = "YOU LOSE";
        document.querySelector('.player').classList.remove("win");
        setTimeout(() => {
            document.querySelector('.bot').classList.add("win");
        }, 200);
    }
}

// ONLICK PLAY AGAIN BUTTON
const playAgain = document.querySelector(".play-again");
playAgain.addEventListener("click", () => {
    document.querySelector(".options").classList.remove("visible");
    document.querySelector(".final").classList.add("visible");
    document.querySelector('.player').classList.remove("win");
    document.querySelector('.bot').classList.remove("win");
    document.querySelector(".score h1").innerText = val;
});
