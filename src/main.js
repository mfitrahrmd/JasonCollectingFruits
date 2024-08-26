import Phaser from "phaser";
import StartScene from "./scenes/StartScene";
import CollectingFruitsScene from "./scenes/CollectingFruitsScene";
import GameOverScene from "./scenes/GameOverScene";

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 600,
  height: 640,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 2000 },
    },
  },
  scene: [StartScene, CollectingFruitsScene, GameOverScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

export default new Phaser.Game(config);
