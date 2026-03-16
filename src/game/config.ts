import Phaser from "phaser";

const getResponsiveDimensions = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Calculate game dimensions maintaining aspect ratio
  const aspectRatio = 4/3; // Original 800x600 aspect ratio
  let gameWidth = Math.min(viewportWidth * 0.9, 800);
  let gameHeight = gameWidth / aspectRatio;
  
  // Ensure game doesn't exceed viewport height
  if (gameHeight > viewportHeight * 0.8) {
    gameHeight = viewportHeight * 0.8;
    gameWidth = gameHeight * aspectRatio;
  }
  
  return {
    width: Math.floor(gameWidth),
    height: Math.floor(gameHeight)
  };
};

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: getResponsiveDimensions().width,
  height: getResponsiveDimensions().height,
  parent: "game-container",
  backgroundColor: "#111111",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: getResponsiveDimensions().width,
    height: getResponsiveDimensions().height
  },
  physics: {
    default: "arcade",
    arcade: { debug: false }
  }
};