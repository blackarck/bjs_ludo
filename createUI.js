 createUI = function(scene) {
         scene = scene;
         console.log("Creating User interface")
         advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameui");

         //show splash screen
         var b1 = new BABYLON.GUI.Image("b1", "assets/splash.svg");
         b1.width = .4;
         b1.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;

         advancedTexture.addControl(b1);


         setTimeout(() => {
             // advancedTexture1.removeControl(b1);
             b1.isVisible = false;
             showSelection(scene);
         }, 600);

     } //end of function createPawns



 showSelection = function(scene) {
     var textblock = new BABYLON.GUI.TextBlock();
     textblock.text = "Welcome to game, choose your pawn !!";
     textblock.fontSize = 24;
     textblock.top = -300;
     textblock.color = "white";

     var grect1 = BABYLON.GUI.Button.CreateImageOnlyButton("grect1", "assets/pawnimg.svg");
     grect1.image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
     grect1.color = "green";
     grect1.children[0].detectPointerOnOpaqueOnly = true;
     grect1.background = "green";
     grect1.width = .1;
     grect1.height = "160px";
     grect1.image.height = "100px";
     grect1.onPointerUpObservable.add(function() {
         rrect1.isVisible = false;
         grect1.isVisible = false;
         yrect1.isVisible = false;
         brect1.isVisible = false;
         textblock.isVisible = false;
         pawnSelection("g")
     });
     grect1.left = -300;


     var rrect1 = BABYLON.GUI.Button.CreateImageOnlyButton("grect1", "assets/pawnimg.svg");
     rrect1.image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
     rrect1.color = "red";
     rrect1.background = "red";
     rrect1.width = .1;
     rrect1.height = "160px";
     rrect1.image.height = "100px";
     rrect1.onPointerUpObservable.add(function() {
         rrect1.isVisible = false;
         grect1.isVisible = false;
         yrect1.isVisible = false;
         brect1.isVisible = false;
         textblock.isVisible = false;
         pawnSelection("r")
     });
     rrect1.left = -100;

     var brect1 = BABYLON.GUI.Button.CreateImageOnlyButton("grect1", "assets/pawnimg.svg");
     brect1.image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
     brect1.color = "blue";
     brect1.background = "blue";
     brect1.width = .1;
     brect1.height = "160px";
     brect1.image.height = "100px";
     brect1.onPointerUpObservable.add(function() {

         rrect1.isVisible = false;
         grect1.isVisible = false;
         yrect1.isVisible = false;
         brect1.isVisible = false;
         textblock.isVisible = false;
         pawnSelection("b")
     });
     brect1.left = 100;

     var yrect1 = BABYLON.GUI.Button.CreateImageOnlyButton("grect1", "assets/pawnimg.svg");
     yrect1.image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
     yrect1.color = "yellow";
     yrect1.background = "yellow";
     yrect1.width = .1;
     yrect1.height = "160px";
     yrect1.image.height = "100px";
     yrect1.onPointerUpObservable.add(function() {

         rrect1.isVisible = false;
         grect1.isVisible = false;
         yrect1.isVisible = false;
         brect1.isVisible = false;
         textblock.isVisible = false;
         pawnSelection("y")
     });
     yrect1.left = 300;

     rrect1.alpha = 0;
     grect1.alpha = 0;
     yrect1.alpha = 0;
     brect1.alpha = 0;

     const frameRate = 30;
     const calpha = new BABYLON.Animation("xSlide", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

     const keyFrames = [];
     keyFrames.push({
         frame: 0,
         value: 0
     });
     keyFrames.push({
         frame: 60,
         value: 1
     });

     calpha.setKeys(keyFrames);

     scene.beginDirectAnimation(grect1, [calpha], 0, 2 * frameRate, true);
     scene.beginDirectAnimation(rrect1, [calpha], 0, 2 * frameRate, true);
     scene.beginDirectAnimation(brect1, [calpha], 0, 2 * frameRate, true);
     scene.beginDirectAnimation(yrect1, [calpha], 0, 2 * frameRate, true);
     advancedTexture.addControl(textblock);
     advancedTexture.addControl(rrect1);
     advancedTexture.addControl(grect1);
     advancedTexture.addControl(brect1);
     advancedTexture.addControl(yrect1);


 };

 pawnSelection = function(pcolor) {

         console.log("Selected color " + pcolor);
         //show start of the game i.e. make all the pawns invisible
         createLudoBoard(scene);
         // createPawns(scene);
     } //end of function pawnselection

 class UI {
     constructor() {
         console.log("Constructor of ui");
     }
 }