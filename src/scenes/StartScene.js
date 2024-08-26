import Phaser from "phaser";
import StartButton from "../../public/images/StartButton.png";
import Start from "../../public/images/Start.png";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }

  init(data) {
    this.startButton = undefined;
  }

  preload() {
    this.load.image("startBackground", Start);
    this.load.image("startButton", StartButton);
  }

  create() {
    this.add.image(200, 320, "startBackground");
    this.startButton = this.add
      .image(300, 500, "startButton")
      .setInteractive()
      .setScale(0.5);
    this.add.text(250, 485, "Start", {
      fontSize: "32px",
      fill: "black",
    });
    this.startButton.once(
      "pointerup",
      () => {
        this.scene.start("collecting-fruits-scene");
      },
      this
    );
  }
}
