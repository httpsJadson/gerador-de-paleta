// IMPORTS
import { readableTextColor } from "../js/utils/colors.js";

// FUNÇÕES
export function populateBox(boxEl, hex) {
    boxEl.style.backgroundColor = hex;
    boxEl.dataset.color = hex;

    let label = boxEl.querySelector(".palette-hex");
    if (!label) {
        label = document.createElement("span");
        label.className = "palette-hex text-sm px-2 py-1 rounded mt-2";
        boxEl.appendChild(label);
    }
    label.textContent = hex;

    const textColor = readableTextColor(hex);
    label.style.color = textColor === "white" ? "white" : "#111827";

    let copyBtn = boxEl.querySelector(".copy-btn");
    if (!copyBtn) {
        copyBtn = document.createElement("button");
        copyBtn.className ="copy-btn absolute top-2 right-2 bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-xs";
        copyBtn.type = "button";
        copyBtn.innerText = "Copiar";
        boxEl.appendChild(copyBtn);
    }

    boxEl.classList.add("relative");

    copyBtn.replaceWith(copyBtn.cloneNode(true));
    copyBtn = boxEl.querySelector(".copy-btn");
    copyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(hex).then(() => {
            const prev = copyBtn.innerText;
            copyBtn.innerText = "Copiado!";
            setTimeout(() => (copyBtn.innerText = prev), 900);
        });
    });

    boxEl.onclick = () => {
        navigator.clipboard.writeText(hex).then(() => {
            label.textContent = "Copiado!";
            setTimeout(() => (label.textContent = hex), 900);
        });
    };
}
