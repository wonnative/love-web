
function showScreen(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    const target = document.getElementById(id);

    target.classList.add("active");

}


/* ========================= */
/* START GAME */
/* ========================= */

function startGame() {

    showScreen("puzzle1");

}


/* ========================= */
/* PUZZLE 1 */
/* ========================= */

function correctPuzzle1() {

    const message =
        document.getElementById("puzzle1Message");

    message.textContent =
        "Correct ❤️ You know me too well.";

    setTimeout(() => {

        showScreen("puzzle2");

    }, 1200);

}


function wrongAnswer(button) {

    const message =
        document.getElementById("puzzle1Message");

    message.textContent =
        "Hmm... try again 👀";

    button.classList.add("shake");

    setTimeout(() => {

        button.classList.remove("shake");

    }, 400);

}


/* ========================= */
/* PUZZLE 2 */
/* ========================= */

function checkPuzzle2() {

    const input =
        document.getElementById("answer2");

    const message =
        document.getElementById("puzzle2Message");

    const answer =
        input.value.trim().toLowerCase();


    if (answer === "love") {

        message.textContent =
            "Correct. ❤️";

        setTimeout(() => {

            showScreen("puzzle3");

        }, 1200);

    }

    else {

        message.textContent =
            "Not quite... think about us 👀";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 400);

    }

}


/* ========================= */
/* PUZZLE 3 */
/* ========================= */

function correctPuzzle3() {

    const message =
        document.getElementById("puzzle3Message");

    message.textContent =
        "Exactly. That's the answer.";

    setTimeout(() => {

        showScreen("puzzleRoom");

    }, 1200);

}


function wrongAnswer3(button) {

    const message =
        document.getElementById("puzzle3Message");

    message.textContent =
        "Nice guess... but think deeper ❤️";

    button.classList.add("shake");

    setTimeout(() => {

        button.classList.remove("shake");

    }, 400);

}


/* ========================= */
/* MEMORY → FINAL */
/* ========================= */

function showFinal() {

    showScreen("final");

}


/* ========================= */
/* FINAL → SECRET */
/* ========================= */

function showSecret() {

    showScreen("secret");

    createHeartExplosion();

}


/* ========================= */
/* RESTART */
/* ========================= */

function restart() {

    showScreen("startScreen");

}


/* ========================= */
/* FLOATING HEARTS */
/* ========================= */

function createHeart() {

    const container =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        Math.random() > 0.5
            ? "❤️"
            : "♡";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    container.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 700);


/* ========================= */
/* HEART EXPLOSION */
/* ========================= */

function createHeartExplosion() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add("heart");

            heart.textContent =
                Math.random() > 0.5
                    ? "❤️"
                    : "✨";


            heart.style.left =
                (40 + Math.random() * 20) + "%";


            heart.style.bottom =
                "40%";


            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";


            heart.style.animationDuration =
                (2 + Math.random() * 2) + "s";


            document
                .querySelector(".hearts")
                .appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 5000);

        }, i * 80);

    }

}


/* ========================= */
/* EXTRA PUZZLE ROOM */
/* ========================= */

function openPuzzleRoom() {

    showScreen("puzzleRoom");

}


/* ========================= */
/* PUZZLE 4 */
/* ========================= */

function checkPuzzle4() {

    const input =
        document.getElementById("answer4");

    const message =
        document.getElementById("puzzle4Message");

    const answer =
        input.value.trim();


    // GANTI INI dengan tanggal kalian
    if (answer === "13012026") {

        message.textContent =
            "Correct ❤️ You remembered.";

        setTimeout(() => {

            showScreen("puzzle5");

        }, 1200);

    }

    else {

        message.textContent =
            "Hmm... try again 👀";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 400);

    }

}


/* ========================= */
/* PUZZLE 5 */
/* ========================= */

function checkPuzzle5() {

    const input =
        document.getElementById("answer5");

    const message =
        document.getElementById("puzzle5Message");

    const answer =
        input.value.trim().toLowerCase();


    if (answer === "reinhard") {

        message.textContent =
            "That's right ❤️";

        setTimeout(() => {

            showScreen("spinWheel");

        }, 1200);

    }

    else {

        message.textContent =
            "You know the answer... 👀";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 400);

    }

}

/* ========================= */
/* SPIN WHEEL */
/* ========================= */

const wheelCanvas = document.getElementById("wheel");

if (wheelCanvas) {

    const ctx = wheelCanvas.getContext("2d");

    const wheelOptions = [
        "A Hug 🤗",
        "A Kiss 💋",
        "A Date 🍰",
        "Your Wish 💕",
        "A Surprise 🎁",
        "I Love You ❤️"
    ];

    const colors = [
        "#ffd6e0",
        "#ffe5ec",
        "#f8d7da",
        "#fff0f3",
        "#fce1e4",
        "#f9c5d1"
    ];

    let currentRotation = 0;
    let isSpinning = false;


    function drawWheel() {

        const center = wheelCanvas.width / 2;
        const radius = center;

        const slice =
            (2 * Math.PI) / wheelOptions.length;


        ctx.clearRect(
            0,
            0,
            wheelCanvas.width,
            wheelCanvas.height
        );


        wheelOptions.forEach((option, index) => {

            const startAngle =
                index * slice;

            const endAngle =
                startAngle + slice;


            /* Wheel */

            ctx.beginPath();

            ctx.moveTo(center, center);

            ctx.arc(
                center,
                center,
                radius,
                startAngle,
                endAngle
            );

            ctx.closePath();

            ctx.fillStyle =
                colors[index];

            ctx.fill();


            /* Border */

            ctx.strokeStyle = "#ffffff";

            ctx.lineWidth = 3;

            ctx.stroke();


            /* Text */

            ctx.save();

            ctx.translate(center, center);

            ctx.rotate(
                startAngle + slice / 2
            );

            ctx.textAlign = "right";

            ctx.fillStyle = "#6d4050";

            ctx.font =
                "bold 15px Arial";

            ctx.fillText(
                option,
                radius - 20,
                5
            );

            ctx.restore();

        });


        /* Center */

        ctx.beginPath();

        ctx.arc(
            center,
            center,
            25,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#ffffff";

        ctx.fill();

        ctx.strokeStyle = "#e8a8b8";

        ctx.lineWidth = 3;

        ctx.stroke();

    }


    drawWheel();


    /* ========================= */
    /* SPIN */
    /* ========================= */

    window.spinWheel = function () {

        if (isSpinning) return;

        isSpinning = true;


        const button =
            document.getElementById("spinButton");

        const result =
            document.getElementById("wheelResult");

        const continueButton =
            document.getElementById("continueWheel");


        button.disabled = true;

        result.textContent = "";


        const extraRotation =
            360 * 5 +
            Math.floor(Math.random() * 360);


        currentRotation +=
            extraRotation;


        wheelCanvas.style.transition =
            "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";

        wheelCanvas.style.transform =
            `rotate(${currentRotation}deg)`;


        setTimeout(() => {

            const normalized =
                currentRotation % 360;

            const sliceSize =
                360 / wheelOptions.length;

            const pointerAngle =
                (360 - normalized + 270) % 360;

            const selectedIndex =
                Math.floor(
                    pointerAngle / sliceSize
                );


            result.textContent =
                "You got: " +
                wheelOptions[selectedIndex] +
                " ❤️";


            continueButton.style.display =
                "inline-block";


            isSpinning = false;

        }, 4000);

    };

}