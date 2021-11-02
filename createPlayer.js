createPlayer = function(scene) {
        console.log("Creating player")
//        const pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
    } //end of function createPawns
 

class Player{

pname;
pcolor;

Player(plname,plcolor){
        this.pname=plname;
        this.pcolor=plcolor;
        console.log("Player created with name "+ this.pname + " ,color-"+this.pcolor);
}


}//end of class Player