document.querySelector(".wrapperL").addEventListener("click", () => moveBlocks(".wrapperL"));
document.querySelector(".wrapperE").addEventListener("click", () => moveBlocks(".wrapperE"));
document.querySelector(".wrapperG").addEventListener("click", () => moveBlocks(".wrapperG"));
document.querySelector(".wrapperO").addEventListener("click", () => moveBlocks(".wrapperO"));

function moveBlocks(wrapperSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    const wrapperWidth = wrapper.offsetWidth;
    const wrapperHeight = wrapper.offsetHeight;

    const positions = {
        "L.R": { x: 0, y: 0, rotation: 20 },
        "L.Y": { x: 0, y: 35, rotation: 70 },
        "L.G": { x: 3, y: 55, rotation: 102 },
        "L.B": { x: 20, y: 52, rotation: 180 },
        "E.R1": { x: 0, y: 0, rotation: 20 },
        "E.Y": { x: 0, y: 35, rotation: 70 },
        "E.R2": { x: 12, y: 44, rotation: 110 },
        "E.B": { x: 15, y: -20, rotation: 176 },
        "E.G": { x: 9, y: 10, rotation: 102 },
        "G.R1": { x: 0, y: 0, rotation: 20 },
        "G.Y": { x: 0, y: 35, rotation: 70 },
        "G.R2": { x: 12, y: 44, rotation: 110 },
        "G.R3": { x: 25, y: 39, rotation: 20 },
        "G.B1": { x: 25, y: -31, rotation: 180 },
        "G.B2": { x: 24, y: 7, rotation: 180 },
        "G.G": { x: 7, y: -28, rotation: 102 },
        "O.R1": { x: 0, y: 0, rotation: 20 },
        "O.Y1": { x: 0, y: 35, rotation: 70 },
        "O.R2": { x: 25, y: 0, rotation: 20 },
        "O.Y2": { x: 25, y: 35, rotation: 70 },
        "O.B1": { x: 23, y: -31, rotation: 180 },
        "O.G1": { x: 3, y: -28, rotation: 102 },
        "O.G2": { x: 3, y: 55, rotation: 102 },
        "O.B2": { x: 23, y: 51, rotation: 180 },

    };

    const blocks = wrapper.querySelectorAll(".block");

    blocks.forEach(block => {
        const letter = block.getAttribute("letter");

        if (positions[letter]) {
            const { x, y, rotation } = positions[letter];

            const xPercent = x / 100 * wrapperWidth;
            const yPercent = y / 100 * wrapperHeight;
            
            block.style.transform = `translate(${xPercent}px, ${yPercent}px) rotate(${rotation}deg)`;
        }
    });
}