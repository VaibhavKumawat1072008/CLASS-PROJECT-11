var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ed398917-fb81-4818-805f-2cb5f8e2afe4"],"propsByKey":{"ed398917-fb81-4818-805f-2cb5f8e2afe4":{"name":"dino","sourceUrl":null,"frameSize":{"x":28,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"CaS0YH7HxmuqaPD.ypKgr9Vrq24HUtOP","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":50},"rootRelativePath":"assets/ed398917-fb81-4818-805f-2cb5f8e2afe4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var r = createSprite(200,200,10,10);

var dino = createSprite(50,200,10,10);
dino.setAnimation("dino");

var line1 = createSprite(100,225,400,3);
line1.shapeColour="black";
var line2 = createSprite(300,225,400,3);
line2.shapeColour="black";

var bar = createSprite(50,100,50,3);
bar.shapeColor="white";

var bar2 = createSprite(200,225,400,4);
bar2.shapeColor="black";

var e = createSprite(400,200,20,50);
e.shapeColor="black";

var gameState="start";
    
function draw() {
  background("");
  
  if (gameState === "start"){
    text("PRESS ENTER TO START",200,200);
    
  }
  
  if (keyDown("ENTER")){
    line1.velocityX="-10";
    line2.velocityX="-10";
    e.velocityX="-10";
    r.velocityX="-10";
    gameState ="play";
  }
  if (gameState==="play"){
  if (keyDown("space")){
    dino.velocityY="-5";
  }
  }
  
  fill("red");
  textSize(21);
  text("score: "+score,300,50);
  
  if (line1.x < 0){
    line1.x=400;
  } else if (line2.x < 0){
    line2.x=400;
  }
  if (dino.bounceOff(bar2)){
    dino.setVelocity(0,0);
  if (r.x < 0){
    r.x=400;
  }
  if (e.X<400){
    score=score+1;
  }
  }
  
  dino.bounceOff(bar);
  dino.bounceOff(bar2);
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
