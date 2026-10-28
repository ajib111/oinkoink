const messages = [
    "Oink? 🐷",
    "Nooo piggy",
    "Really, piggyla? 😭",
    "Come onnn pigguuu",
    "oink oink 😭",
    "Don't do this piggy",
    "Piggy, think again",
    "Hehe nice try",
    "No is not an option 😂",
    "Khar khar 🐷 pleasee",
    "Last chance, oink oink",
    "Just press yes, piggy ❤️",
    "Hehe still chasing that no? pigguuu",
    "Piggy being piggy 🙄",
    "Kasto jiddi sugur ho 😭🐷",
    "Just press yes, bujheu? 😂💕"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}