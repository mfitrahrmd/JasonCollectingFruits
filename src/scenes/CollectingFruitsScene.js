import Background from "../../public/images/Background.png";
import Start from "../../public/images/Start.png";
import End from "../../public/images/End.png";
import LeftButton from "../../public/images/LeftButton.png";
import RightButton from "../../public/images/RightButton.png";
import Player from "../../public/images/Player.png";
import Avocado from "../../public/images/Avocado.png";
import Oranges from "../../public/images/Orange.png";
import Plum from "../../public/images/Plum.png";
import OrangeApple from "../../public/images/OrangeApple.png";
import PurplePear from "../../public/images/PurplePear.png";
import FallingFruits from "../ui/FallingFruits";
export default class CollectingFruitsScene extends Phaser.Scene {
  constructor() {
    super("collecting-fruits-scene");
  }
  init() {
    this.player = undefined;
    this.leftButton = undefined;
    this.rightButton = undefined;
    this.avocado = undefined;
    this.oranges = undefined;
    this.plum = undefined;
    this.orangeApple = undefined;
    this.purplePear = undefined;
    this.nav_left = false;
    this.nav_right = false;
    this.gameHalfWidth = this.scale.width * 0.5;
    this.hameHalfHeight = this.scale.height * 0.5;
    this.scoreLabel = undefined;
    this.score = 0;
    this.timerLabel = undefined;
    this.timer = 60;
    this.speed = 200;
  }
  preload() {
    this.load.image("background", Background);
    this.load.image("start", Start);
    this.load.image("end", End);
    this.load.image("leftButton", LeftButton);
    this.load.image("rightButton", RightButton);
    this.load.image("avocado", Avocado);
    this.load.image("oranges", Oranges);
    this.load.image("plum", Plum);
    this.load.image("orangeApple", OrangeApple);
    this.load.image("purplePear", PurplePear);
    this.load.spritesheet("player", Player, {
      frameWidth: 386 / 6,
      frameHeight: 256 / 4,
    });
  }
  create() {
    this.add.image(210, 320, "background").setScale(0.5, 0.5);
    this.player = this.physics.add
      .sprite(250, 150, "player")
      .setBounce(0.2)
      .setOffset(0, 70)
      .setCollideWorldBounds(true);
    this.scoreLabel = this.add.text(10, 10, "Score", {
      fontSize: "16px",
      fill: "black",
      backgroundColor: "white",
    });

    this.createButtons();
    this.createAnimation();

    this.oranges = this.physics.add.group({
      classType: FallingFruits,
      maxSize: 10, //-----> banyaknya enemy dalam satu grup
      runChildUpdate: true,
    });

    this.physics.add.overlap(
      this.player,
      this.oranges,
      this.collectOranges,
      null,
      this
    );

    this.time.addEvent({
      delay: Phaser.Math.Between(1000, 5000),
      callback: this.spawnOranges,
      callbackScope: this,
      loop: true,
    });

    this.timerLabel = this.add
      .text(500, 10, "Time :", {
        fill: "white",
        backgroundColor: "black",
      })
      .setDepth(1);

    this.gameStart();
  }
  update(time) {
    this.movePlayer(this.player, time);
    this.scoreLabel.setText("Score : " + this.score);
    if ((this.startGame = true)) {
      this.timerLabel.setText("Timer :" + this.timer);
    }
  }
  createAnimation() {
    this.anims.create({
      key: "player-left",
      frames: this.anims.generateFrameNumbers("player", { start: 5, end: 9 }),
      frameRate: 12,
    });
    this.anims.create({
      key: "player-right",
      frames: this.anims.generateFrameNumbers("player", { start: 5, end: 9 }),
      frameRate: 12,
    });
  }
  createButtons() {
    this.input.addPointer(3);

    let nav_left = this.add
      .image(225, 600, "leftButton")
      .setInteractive()
      .setDepth(0.5)
      .setAlpha(0.8)
      .setScale(0.3, 0.3);
    let nav_right = this.add
      .image(nav_left.x + nav_left.displayWidth + 15, 600, "rightButton")
      .setInteractive()
      .setDepth(0.5)
      .setAlpha(0.8)
      .setScale(0.3, 0.3);
    nav_left.on(
      "pointerdown",
      () => {
        this.nav_left = true;
      },
      this
    );
    nav_left.on(
      "pointerup",
      () => {
        this.nav_left = false;
      },
      this
    );
    nav_right.on(
      "pointerdown",
      () => {
        this.nav_right = true;
      },
      this
    );
    nav_right.on(
      "pointerup",
      () => {
        this.nav_right = false;
      },
      this
    );
  }
  movePlayer(player, time) {
    if (this.nav_left) {
      player.setVelocityX(this.speed * -1);
      player.anims.play("player-left", true);
      player.setFlipX(false);
    } else if (this.nav_right) {
      player.setVelocityX(this.speed);
      player.anims.play("player-right", true);
      player.setFlipX(true);
    } else {
      player.setVelocityX(0);
    }
  }
  spawnOranges() {
    const config = {
      speed: 300,
      rotation: 0.01,
    };
    const oranges = this.oranges.get(0, 0, "oranges", config).setScale(0.4);
    const positionX = Phaser.Math.Between(50, 350); //-----> Mengambil angka acak dari 50-350
    console.log(oranges);
    if (oranges) {
      console.log("spawn");
      oranges.spawn(positionX); //--------------> Memanggil method spawn dengan parameter nilai posisi sumbux
    }
  }
  collectOranges(player, oranges) {
    oranges.destroy();
    this.score += 10;
    this.scoreLabel.setText("Score : " + this.score);
  }
  gameStart() {
    this.countdown = this.time.addEvent({
      delay: 1000,
      callback: this.gameOver,
      callbackScope: this,
      loop: true,
    });
  }

  gameOver() {
    this.timer--;
    if (this.timer < 0) {
      this.scene.start("over-scene", { score: this.score });
    }
  }
}
