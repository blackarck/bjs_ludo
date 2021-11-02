//author vivek sharma 

var canvas = document.getElementById("renderCanvas");
//https://playground.babylonjs.com/#XCF1F5#10
var engine = null;
var scene = null;
var sceneToRender = null;
var mainPlayer;

var createDefaultEngine = function() {
    return new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false
    });
}; //end of createdefaultengine

class Playground {
    static CreateScene(engine, canvas) {
            // This creates a basic Babylon Scene object (non-mesh)
            var scene = new BABYLON.Scene(engine);
            // This creates and positions a free camera (non-mesh)
            //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(3, 20, 3), scene);
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 20, new BABYLON.Vector3(7, 7, 0), scene);
            camera.setPosition(new BABYLON.Vector3(10, 20, 10));
            // This targets the camera to scene origin
           // camera.setTarget(new BABYLON.Vector3(5, 4, -5));
            // This attaches the camera to the canvas
            camera.attachControl(canvas, true);
            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
            // Default intensity is 1. Let's dim the light a small amount
            light.intensity = 0.7;

            createUI(scene,camera);
        
            return scene;
        } //end of create scene method
} //end of class playground



createScene = function() {
        return Playground.CreateScene(engine, engine.getRenderingCanvas());
    } //end of createscene

window.initFunction = async function() {
    //console.log("Initialize window");
    var asyncEngineCreation = async function() {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    window.scene = createScene();
};
initFunction().then(() => {
    sceneToRender = scene
    engine.runRenderLoop(function() {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
});

// Resize
window.addEventListener("resize", function() {
    engine.resize();
});