const lines = [
    "whoami",
    "Alias: lmao_DK",
    "Role: Class 12 Science Student",
    "Skills: Unity Game Dev | SQLi | Ethical Hacking",
    "Projects: Flipside Slime (Game Jam Entry)",
    "Idols: Lewis Hamilton & Lionel Messi",
    "Leadership: Former School Head Boy",
    "Sports: Badminton & School Football Team",
    "Status: System operational. Ready for the challenge."
];

let lineIdx = 0;
let charIdx = 0;
const speed = 40;
const target = document.getElementById("typewriter");

function type(){
    if (lineIdx < lines.length) {
        if (charIdx < lines[lineIdx].length) {
            target.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, speed);
        } else {
            target.innerHTML += "<br/><span class='prompt-prefix'>user@lmao_DK:~$</span> ";
            lineIdx++;
            charIdx = 0;
            setTimeout(type, 500);
        }
    }
}

function enableSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    enableSmoothScroll();
});

function checkSQLi() {
    const val = document.getElementById("sqliInput").value;
    const res = document.getElementById("sqliResult");
    res.innerText = "Query: SELECT * FROM users WHERE user='" + val + "'";
    
    if (val.includes("' OR") || val.includes("' OR '1'='1'")) {
        res.style.color = "#00ff66";
    } else {
        res.style.color = "#ff7b72";
    }
}