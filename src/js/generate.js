//IMPORTS
import { generateRandomHex } from "./utils/colors.js";
import { populateBox } from "../components/paletteBox.js";

//VARIAVEIS / CONSTANTES
const selectColors = document.getElementById("number-of-colors");
const palette = document.getElementById("palette");
const boxes = Array.from(document.querySelectorAll(".color-box"));
const btnGeneratePalette = document.getElementById("btn-generate-palette") || document.getElementById("btn-generate"); // pega pelo id que tu tiver
const defaultAmount = Number(selectColors?.value) || 2;


applyColumns(defaultAmount);
generateColorsForVisibleBoxes();

selectColors.addEventListener("change", () => {
    const n = Number(selectColors.value);
    applyColumns(n);
    generateColorsForVisibleBoxes();
});

btnGeneratePalette.addEventListener("click", () => {
    generateColorsForVisibleBoxes();
});


// --- FUNÇÕES --- //

function applyColumns(n) {
    palette.classList.remove("cols-2","cols-3","cols-4","cols-5");
    palette.classList.add(`cols-${n}`);

    boxes.forEach((box, idx) => {
        if (idx < n) box.classList.remove("hidden");
        else box.classList.add("hidden");
    });

    fixBorders(n);
}

function generateColorsForVisibleBoxes() {
    boxes.forEach((box) => {
        if (box.classList.contains("hidden")) return;
        const hex = generateRandomHex();
        populateBox(box, hex);
    });
}

function fixBorders(n) {
    boxes.forEach((box, idx) => {
        box.classList.toggle("border-r", idx < n - 1);
    });
}
