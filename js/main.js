// Import Pixi.js
const PIXI = require('pixi.js');
// import * as PIXI from 'pixi.js';


// Create a Pixi Application
const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
});

// Append the canvas to the HTML body
document.body.appendChild(app.view);


const spriteWidth = 16;  // Width of each sprite tile in pixels
const spriteHeight = 16; // Height of each sprite tile in pixels
const columns = 49;      // Number of tiles horizontally
const rows = 22;         // Number of tiles vertically

const sprites = [];

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
        const spriteInfo = {
            x: x * spriteWidth,          // X-coordinate of the sprite in the spritesheet
            y: y * spriteHeight,         // Y-coordinate of the sprite in the spritesheet
            width: spriteWidth,          // Width of the sprite
            height: spriteHeight,        // Height of the sprite
        };

        sprites.push(spriteInfo);
    }
}


// Now you can start building your game using Pixi.js
const test = PIXI.Sprite.from('https://pixijs.com/assets/bunny.png');
const spriteIndex = 0; // Replace with the index of the sprite you want to load
const spriteInfo = sprites[spriteIndex];

const texture = PIXI.Texture.from('assets/colored-transparent_packed.png', {
    x: spriteInfo.x,
    y: spriteInfo.y,
    width: spriteInfo.width,
    height: spriteInfo.height,
});
const sprite = PIXI.Sprite.from(texture);


app.stage.addChild(test);
app.stage.addChild(sprite);
console.log("asaasda", test);

let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick
app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    elapsed += delta;
    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    test.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});

