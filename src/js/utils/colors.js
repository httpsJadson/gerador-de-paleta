// EXPORT
export function generateRandomHex() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
}

export function readableTextColor(hex) {
  
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0,2), 16);
  const g = parseInt(h.substring(2,4), 16);
  const b = parseInt(h.substring(4,6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  return luminance > 186 ? "black" : "white";
}

