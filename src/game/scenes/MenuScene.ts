export default class MenuScene extends Phaser.Scene {

  constructor() {
    super("MenuScene");
  }

  private startGame() {
    this.scene.start("GameScene");
  }

  create() {
    const { width, height } = this.scale;

    this.add.text(width / 2, height / 2 - 80,
      "TANK 1990",
      { fontSize: "42px", color: "#00ff88" }
    ).setOrigin(0.5);

    this.add.text(width / 2, height / 2,
      "Arrow Keys / D-Pad - Move\nSPACE / Tap Left - Fire",
      { fontSize: "18px", align: "center" }
    ).setOrigin(0.5);

    const startText = this.add.text(width / 2, height / 2 + 80,
      "PRESS ENTER OR CLICK TO START",
      { fontSize: "20px", color: "#ffffff" }
    ).setOrigin(0.5);

    // Keyboard: both keydown-ENTER and explicit KeyCodes.ENTER
    this.input.keyboard?.once("keydown-ENTER", () => this.startGame());
    const enterKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    enterKey?.once("down", () => this.startGame());

    // Mouse / touch anywhere on the start text area
    startText.setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.startGame());

    // Also allow tap/click anywhere on the screen
    this.input.once("pointerdown", () => this.startGame());
  }
}