document.querySelector(".wrapperL").addEventListener("click", () => moveBlocks(".wrapperL"));
document.querySelector(".wrapperE").addEventListener("click", () => moveBlocks(".wrapperE"));

function moveBlocks(wrapperSelector) {
    const wrapper = document.querySelector(wrapperSelector);

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    function applyTransform(letter, translateXPercent, translateYPercent, rotation) {
        const element = document.querySelector(`[letter="${letter}"]`);
        if (element) {
            element.style.transform = `translate(${screenWidth * translateXPercent}px, ${screenHeight * translateYPercent}px) rotate(${rotation}deg)`;
        }
    }

    if (wrapperSelector === ".wrapperL") {
        applyTransform("L.R", 0.1, 0.2, 20);
        applyTransform("L.Y", 0.100, 0.283, 70);
        applyTransform("L.G", 0.11, 0.325, 102);
    }

    
    if (wrapperSelector === ".wrapperE") {
        applyTransform("E.R1", 0.1, 0.2, 20);
        applyTransform("E.R2", 0.100, 0.283, 70);
        applyTransform("E.G", 0.11, 0.325, 102);
        applyTransform("E.Y", 0.11, 0.325, 102);
        applyTransform("E.B", 0.11, 0.325, 102);
    }
}