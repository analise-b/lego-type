document.querySelector(".wrapperL").addEventListener("click", () => moveBlocks(".wrapperL"));
document.querySelector(".wrapperE").addEventListener("click", () => moveBlocks(".wrapperE"));
document.querySelector(".wrapperG").addEventListener("click", () => moveBlocks(".wrapperG"));
document.querySelector(".wrapperO").addEventListener("click", () => moveBlocks(".wrapperO"));
document.querySelector(".wrapperA").addEventListener("click", () => moveBlocks(".wrapperA"));
document.querySelector(".wrapperB").addEventListener("click", () => moveBlocks(".wrapperB"));
document.querySelector(".wrapperC").addEventListener("click", () => moveBlocks(".wrapperC"));
document.querySelector(".wrapperD").addEventListener("click", () => moveBlocks(".wrapperD"));
document.querySelector(".wrapperF").addEventListener("click", () => moveBlocks(".wrapperF"));
document.querySelector(".wrapperH").addEventListener("click", () => moveBlocks(".wrapperH"));
document.querySelector(".wrapperM").addEventListener("click", () => moveBlocks(".wrapperM"));
document.querySelector(".wrapperP").addEventListener("click", () => moveBlocks(".wrapperP"));
document.querySelector(".wrapperU").addEventListener("click", () => moveBlocks(".wrapperU"));
document.querySelector(".wrapperQ").addEventListener("click", () => moveBlocks(".wrapperQ"));
document.querySelector(".wrapperW").addEventListener("click", () => moveBlocks(".wrapperW"));
document.querySelector(".wrapperY").addEventListener("click", () => moveBlocks(".wrapperY"));
document.querySelector(".wrapperI").addEventListener("click", () => moveBlocks(".wrapperI"));
document.querySelector(".wrapperT").addEventListener("click", () => moveBlocks(".wrapperT"));
document.querySelector(".wrapperJ").addEventListener("click", () => moveBlocks(".wrapperJ"));
document.querySelector(".wrapperS").addEventListener("click", () => moveBlocks(".wrapperS"));
document.querySelector(".wrapperN").addEventListener("click", () => moveBlocks(".wrapperN"));
document.querySelector(".wrapperV").addEventListener("click", () => moveBlocks(".wrapperV"));
document.querySelector(".wrapperR").addEventListener("click", () => moveBlocks(".wrapperR"));
document.querySelector(".wrapperK").addEventListener("click", () => moveBlocks(".wrapperK"));
document.querySelector(".wrapperZ").addEventListener("click", () => moveBlocks(".wrapperZ"));
document.querySelector(".wrapperX").addEventListener("click", () => moveBlocks(".wrapperX"));

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
        "G.B1": { x: 23, y: -31, rotation: 180 },
        "G.B2": { x: 23, y: 7, rotation: 180 },
        "G.G": { x: 7, y: -28, rotation: 102 },

        "O.R1": { x: 0, y: 0, rotation: 20 },
        "O.Y1": { x: 0, y: 35, rotation: 70 },
        "O.R2": { x: 25, y: 0, rotation: 20 },
        "O.Y2": { x: 25, y: 35, rotation: 70 },
        "O.B1": { x: 23, y: -31, rotation: 180 },
        "O.G1": { x: 3, y: -28, rotation: 102 },
        "O.G2": { x: 3, y: 55, rotation: 102 },
        "O.B2": { x: 23, y: 51, rotation: 180 },

        "A.R1": { x: 0, y: 0, rotation: 20 },
        "A.R2": { x: 23, y: 41, rotation: 20 },
        "A.Y1": { x: 0, y: 35, rotation: 70 },
        "A.Y2": { x: 23, y: -3, rotation: 70 },
        "A.G2": { x: 10, y: 15, rotation: 102 },
        "A.G1": { x: 2, y: -28, rotation: 102 },
        "A.B": { x: 22, y: -31, rotation: 180 },

        "B.R1": { x: 0, y: 0, rotation: 20 },
        "B.R2": { x: 23, y: 41, rotation: 20 },
        "B.Y1": { x: 0, y: 38, rotation: 70 },
        "B.Y2": { x: 23, y: -4, rotation: 70 },
        "B.G2": { x: 10, y: 15, rotation: 102 },
        "B.B": { x: 12, y: -31, rotation: 180 },
        "B.G1": { x: 10, y: 55, rotation: 102 },

        "C.R1": { x: 0, y: 0, rotation: 20 },
        "C.Y": { x: 0, y: 35, rotation: 70 },
        "C.R2": { x: 12, y: 45, rotation: 110 },
        "C.G": { x: 12, y: -20, rotation: 110 },

        "D.R1": { x: 0, y: 0, rotation: 20 },
        "D.Y": { x: 0, y: 35, rotation: 70 },
        "D.R2": { x: 12, y: 45, rotation: 110 },
        "D.G": { x: 12, y: -20, rotation: 110 },
        "D.B": { x: 22, y: 15, rotation: 90 },

        "F.R1": { x: 0, y: 0, rotation: 20 },
        "F.Y": { x: 0, y: 35, rotation: 70 },
        "F.B": { x: 15, y: -20, rotation: 176 },
        "F.G": { x: 9, y: 10, rotation: 102 },

        "H.R1": { x: 0, y: 0, rotation: 20 },
        "H.R2": { x: 23, y: 41, rotation: 20 },
        "H.Y1": { x: 0, y: 35, rotation: 70 },
        "H.Y2": { x: 23, y: -3, rotation: 70 },
        "H.G": { x: 2, y: 20, rotation: 102 },
        "H.B": { x: 22, y: 17, rotation: 180 },

        "P.R1": { x: 0, y: 0, rotation: 20 },
        "P.Y1": { x: 0, y: 35, rotation: 70 },
        "P.Y2": { x: 23, y: -3, rotation: 70 },
        "P.G2": { x: 10, y: 15, rotation: 102 },
        "P.G1": { x: 2, y: -28, rotation: 102 },
        "P.B": { x: 22, y: -31, rotation: 180 },

        "U.R1": { x: 0, y: 0, rotation: 20 },
        "U.Y1": { x: 0, y: 35, rotation: 70 },
        "U.R2": { x: 25, y: 0, rotation: 20 },
        "U.Y2": { x: 25, y: 35, rotation: 70 },
        "U.G": { x: 3, y: 55, rotation: 102 },
        "U.B": { x: 23, y: 51, rotation: 180 },

        "Q.R1": { x: 0, y: 0, rotation: 20 },
        "Q.Y1": { x: 0, y: 35, rotation: 70 },
        "Q.R2": { x: 25, y: 0, rotation: 20 },
        "Q.Y2": { x: 25, y: 35, rotation: 70 },
        "Q.B1": { x: 23, y: -31, rotation: 180 },
        "Q.G1": { x: 3, y: -28, rotation: 102 },
        "Q.G2": { x: 3, y: 55, rotation: 102 },
        "Q.G3": { x: 29, y: 55, rotation: 102 },
        "Q.B2": { x: 23, y: 51, rotation: 180 },

        "M.R1": { x: 0, y: 0, rotation: 20 },
        "M.R2": { x: 33, y: 41, rotation: 20 },
        "M.Y1": { x: 0, y: 35, rotation: 70 },
        "M.Y2": { x: 33, y: -5, rotation: 70 },
        "M.G2": { x: 10, y: 15, rotation: 102 },
        "M.G1": { x: 8, y: -20, rotation: 102 },
        "M.B2": { x: 25, y: -23, rotation: 180 },
        "M.B1": { x: 17, y: -7, rotation: 2 },

        "W.R1": { x: 0, y: 0, rotation: 20 },
        "W.R2": { x: 33, y: 41, rotation: 20 },
        "W.Y1": { x: 0, y: 35, rotation: 70 },
        "W.Y2": { x: 33, y: -5, rotation: 70 },
        "W.G2": { x: 10, y: 15, rotation: 102 },
        "W.G1": { x: 8, y: 50, rotation: 102 },
        "W.B2": { x: 25, y: 47, rotation: 180 },
        "W.B1": { x: 17, y: 45, rotation: 2 },

        "Y.R1": { x: 0, y: 0, rotation: 20 },
        "Y.Y1": { x: 12, y: 42, rotation: 70 },
        "Y.Y2": { x: 23, y: -3, rotation: 70 },
        "Y.G": { x: 2, y: 15, rotation: 102 },
        "Y.B": { x: 22, y: 12, rotation: 180 },

        "I.R": { x: 12, y: 0, rotation: 20 },
        "I.Y": { x: 12, y: 35, rotation: 70 },
        "I.B1": { x: 23, y: -31, rotation: 180 },
        "I.G1": { x: 3, y: -28, rotation: 102 },
        "I.G2": { x: 3, y: 55, rotation: 102 },
        "I.B2": { x: 23, y: 51, rotation: 180 },

        "T.R1": { x: 12, y: 0, rotation: 20 },
        "T.Y": { x: 12, y: 35, rotation: 70 },
        "T.B": { x: 23, y: -31, rotation: 180 },
        "T.G": { x: 3, y: -28, rotation: 102 },

        "J.R1": { x: 12, y: 0, rotation: 20 },
        "J.Y": { x: 12, y: 35, rotation: 70 },
        "J.B1": { x: 23, y: -31, rotation: 180 },
        "J.G": { x: 3, y: -28, rotation: 102 },
        "J.B2": { x: 2, y: 51, rotation: 180 },

        "S.R1": { x: 0, y: 0, rotation: 20 },
        "S.R2": { x: 23, y: 41, rotation: 20 },
        "S.G": { x: 2, y: -28, rotation: 102 },
        "S.B1": { x: 22, y: -31, rotation: 180 },
        "S.B2": { x: 22, y: 11, rotation: 180 },
        "S.G2": { x: 2, y: 15, rotation: 102 },
        "S.B3": { x: 22, y: 55, rotation: 180 },
        "S.G3": { x: 2, y: 58, rotation: 102 },

        "N.R1": { x: 0, y: 0, rotation: 20 },
        "N.R2": { x: 33, y: 41, rotation: 20 },
        "N.Y1": { x: 0, y: 35, rotation: 70 },
        "N.Y2": { x: 33, y: -5, rotation: 70 },
        "N.G2": { x: 20, y: 10, rotation: 150 },
        "N.G1": { x: 8, y: -16, rotation: 150 },
        "N.B": { x: 25, y: 30, rotation: 50 },

        "V.R1": { x: 0, y: 0, rotation: 20 },
        "V.Y1": { x: 0, y: 35, rotation: 70 },
        "V.R2": { x: 25, y: 0, rotation: 20 },
        "V.Y2": { x: 25, y: 35, rotation: 70 },
        "V.B": { x: 18, y: 60, rotation: 92 },
        "V.B2": { x: 6, y: 60, rotation: 92 },
        "V.R3": { x: 11, y: 70, rotation: 92 },

        "R.R1": { x: 0, y: 0, rotation: 20 },
        "R.Y1": { x: 0, y: 35, rotation: 70 },
        "R.Y2": { x: 23, y: -3, rotation: 70 },
        "R.G2": { x: 10, y: 15, rotation: 102 },
        "R.G1": { x: 2, y: -28, rotation: 102 },
        "R.B": { x: 22, y: -31, rotation: 180 },
        "R.B2": { x: 18, y: 26, rotation: 90 },
        "R.B3": { x: 20, y: 45, rotation: 93 },
        "R.B4": { x: 27, y: 57, rotation: 93 },

        "K.R1": { x: 0, y: 0, rotation: 20 },
        "K.Y1": { x: 0, y: 35, rotation: 70 },
        "K.G2": { x: 3, y: 15, rotation: 103 },
        "K.B5": { x: 10, y: 1, rotation: 92 },
        "K.B6": { x: 21, y: -19, rotation: 93 },
        "K.B3": { x: 10, y: 30, rotation: 93 },
        "K.B4": { x: 20, y: 50, rotation: 93 },
        "K.R2": { x: 15, y: 40, rotation: 93 },
        "K.R3": { x: 15, y: -10, rotation: 93 },

        "Z.R1": { x: 10, y: 50, rotation: 110 },
        "Z.R2": { x: 33, y: -41, rotation: 110 },
        "Z.Y1": { x: 15, y: -37, rotation: -21 },
        "Z.Y2": { x: 33, y: 55, rotation: -20 },
        "Z.G2": { x: 25, y: 15, rotation: 50 },
        "Z.G1": { x: 35, y: -10, rotation: 50 },
        "Z.B": { x: 18, y: 30, rotation: 130 },

        "X.G1": { x: 0, y: 15, rotation: 102 },
        "X.B1": { x: 10, y: 30, rotation: 93 },
        "X.B2": { x: 20, y: 50, rotation: 93 },
        "X.B3": { x: 10, y: 2, rotation: 93 },
        "X.B4": { x: -20, y: 50, rotation: 93 },

        "X.B5": { x: -10, y: 2, rotation: 93 },
        "X.B6": { x: -21, y: -19, rotation: 93 },
        "X.B7": { x: 21, y: -19, rotation: 93 },
        "X.B8": { x: -10, y: 30, rotation: 93 },




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