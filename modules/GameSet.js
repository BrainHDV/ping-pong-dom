// Game size
export const gameSize = document.querySelector(".pong");
gameSize.style.cssText = `width: ${800}px; height: ${500}px `;
const gameHeader = document.querySelector(".pong__header").offsetHeight;

// Playground size
export const field = {
  width: parseInt(gameSize.style.width),
  height: parseInt(gameSize.style.height) - gameHeader,
};
