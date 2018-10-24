// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  var y = [60, 140, 220];
  this.x = (Math.random() * 500) - 400;
  this.y = y[Math.floor(Math.random(5) * 5)];
  this.speed = Math.random() * 10;

  /*
  var y is an array where the bugs can spawn in either 3 rows
  set up a random x spawn point, y is their fixed array point randomixed
  so more than 1 or all can spawn on 1 row if unlucky
  speed is a random variable
  */
};

// implement later var score = 0;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < 510) {
    this.x += Math.random(100) * 100 * dt * this.speed;
  } // increment the bug based on speed and dt and random speed
  else {
    this.x = -10
    //resets the sprite and loops it once it goes off screen
  }
  if (this.x < player.x + 45 && this.x > player.x - 45 && this.y < player.y + 55 && this.y > player.y - 35) {
    window.location.reload();
    // collision detection
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.reset();
}

Player.prototype.update = function() {
  if (this.y < 0) {
    /// implement later score += 1;
    this.reset();
    window.location.reload();
    /// resets whole window to get new game.
    // prob not good but i can fix this later
  }
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  if (key == 'left' && this.x > 95) {
    this.x -= 100;
  }
  if (key == 'right' && this.x < 395) {
    this.x += 100;
  }
  if (key == 'up' && this.y >= 0) {
    this.y -= 75;
  }
  if (key == 'down' && this.y < 350) {
    this.y += 75;
  }
};

Player.prototype.reset = function() {
  this.x = 200;
  this.y = 380;
  // middle starting point
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var enemy5 = new Enemy();

allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
