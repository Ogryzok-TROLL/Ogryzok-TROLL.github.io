const numBubbles = 50;
const colors = ['#FF69B4', '#FFD700', '#32CD32', '#1E90FF', '#FF4500'];

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 40 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.backgroundColor = color;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    const duration = Math.random() * 5 + 5;
    bubble.style.animation = `float ${duration}s ease-in-out infinite`;

    document.querySelector('.background').appendChild(bubble);
}

function floatAnimation() {
    const keyframes = `
        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-150px); }
            100% { transform: translateY(0); }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
}

for (let i = 0; i < numBubbles; i++) {
    createBubble();
}

floatAnimation();
