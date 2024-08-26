import Phaser from "phaser";
import ReplayButton from "../../public/images/EndButton.png";
import ReplayBackground from "../../public/images/End.png";
import Over from "../../public/images/Over.png";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("over-scene");
  }

  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
  }

  preload() {
    this.load.image("replayBackground", ReplayBackground);
    this.load.image("replayButton", ReplayButton);
    this.load.image("gameOverSign", Over);
  }

  create() {
    this.add.image(200, 320, "replayBackground");
    this.add.image(300, 200, "gameOverSign");
    this.add.text(220, 300, "Score: " + this.score, {
      fontSize: "32px",
      fill: "black",
      backgroundColor: "white",
    });

    this.replayButton = this.add
      .image(300, 500, "replayButton")
      .setInteractive()
      .setScale(0.5);
    this.add.text(230, 485, "Restart", {
      fontSize: "32px",
      fill: "black",
    });
    this.replayButton.once(
      "pointerup",
      () => {
        this.scene.start("collecting-fruits-scene");
      },
      this
    );
  }
}
