import { useEffect, useRef, useState } from "react";
import Game from "./game/Game";

function App() {
  const gameRef = useRef<Game | null>(null);
  const [gameDimensions, setGameDimensions] = useState({ width: 800, height: 600 });
  const [showRotateHint, setShowRotateHint] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Simple mobile check + portrait orientation -> ask for landscape
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isPortrait = viewportHeight > viewportWidth;
      setShowRotateHint(isMobile && isPortrait);

      const aspectRatio = 4 / 3;
      let gameWidth = Math.min(viewportWidth * 0.98, 800);
      let gameHeight = gameWidth / aspectRatio;

      if (gameHeight > viewportHeight * 0.9) {
        gameHeight = viewportHeight * 0.9;
        gameWidth = gameHeight * aspectRatio;
      }

      const width = Math.floor(gameWidth);
      const height = Math.floor(gameHeight);

      setGameDimensions({ width, height });

      if (gameRef.current) {
        gameRef.current.scale.resize(width, height);
        gameRef.current.scale.refresh();
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    if (!gameRef.current) {
      gameRef.current = new Game();
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <>
      <div
        id="game-container"
        style={{
          width: `${gameDimensions.width}px`,
          height: `${gameDimensions.height}px`,
          margin: "0 auto",
          maxWidth: "100%",
          maxHeight: "100vh",
          touchAction: "none",
        }}
      ></div>

      {showRotateHint && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.9)",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
            zIndex: 9999,
          }}
        >
          <h2 style={{ fontSize: "1.6rem", marginBottom: "0.75rem" }}>
            Please rotate your device
          </h2>
          <p style={{ fontSize: "1rem", opacity: 0.85, maxWidth: "320px" }}>
            For the best experience, play this game in{" "}
            <strong>landscape mode</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default App;