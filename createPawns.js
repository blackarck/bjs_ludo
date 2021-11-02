let rpawn1,rpawn2,rpawn3,rpawn4;
let gpawn1,gpawn2,gpawn3,gpawn4;
let bpawn1,bpawn2,bpawn3,bpawn4;
let ypawn1,ypawn2,ypawn3,ypawn4;

createPawns = async(scene) => {
        console.log("Creating pawns")
        rpawn1 = new Pawn(1,1,1);
        rpawn1.createandPosPawn();
        rpawn2 = new Pawn(1,1,2);
        rpawn2.createandPosPawn();
        rpawn3 = new Pawn(1,1,3);
        rpawn3.createandPosPawn();
        rpawn4 = new Pawn(1,1,4);
        rpawn4.createandPosPawn();
 

        gpawn1 = new Pawn(2,1,1);
        gpawn1.createandPosPawn();
        gpawn2 = new Pawn(2,1,2);
        gpawn2.createandPosPawn();
        gpawn3 = new Pawn(2,1,3);
        gpawn3.createandPosPawn();
        gpawn4 = new Pawn(2,1,4);
        gpawn4.createandPosPawn();

        ypawn1 = new Pawn(4,1,1);
        ypawn1.createandPosPawn();
        ypawn2 = new Pawn(4,1,2);
        ypawn2.createandPosPawn();
        ypawn3 = new Pawn(4,1,3);
        ypawn3.createandPosPawn();
        ypawn4 = new Pawn(4,1,4);
        ypawn4.createandPosPawn();

        bpawn1 = new Pawn(3,1,1);
        bpawn1.createandPosPawn();
        bpawn2 = new Pawn(3,1,2);
        bpawn2.createandPosPawn();
        bpawn3 = new Pawn(3,1,3);
        bpawn3.createandPosPawn();
        bpawn4 = new Pawn(3,1,4);
        bpawn4.createandPosPawn();


    } //end of function createPawns

    class Pawn {
    pawnClass;
    //1 for red 2 for green 3 for blue 4 for yellow
    pawnNumber;
    //1,2,3,4 for respective pawns 
    pawnAlive;
    //0 for sitting in stop 1 for alive 2 for won
    pawnPos;
    //on which pos the Pawn is currently present;
    playerAssign;
    //p1 or p2 or p3 or p4
    pawnModel;
    
    constructor(pclass,passign,pnumber){
        this.pawnClass=pclass;
        this.pawnAlive=0; //start from here
        this.playerAssign=passign;
        this.pawnNumber=pnumber;
    }

    async createandPosPawn(){
        let pawnmodel;

        switch(this.pawnClass){
            //red pawns
            case 1:
                //create pawns for red class
                switch(this.pawnNumber){
                 case 1:
                    pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                    pawnmodel.meshes[0].name = "rpawn1";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(1.3,2.4,-1.3);
                 break;
                 case 2:
                      pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                      pawnmodel.meshes[0].name = "rpawn2";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(1.3,2.4,-3.7);
                 break;
                 case 3:
                      pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                      pawnmodel.meshes[0].name = "rpawn3";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(3.7,2.4,-1.3);
                 break;
                 case 4:
                      pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                      pawnmodel.meshes[0].name = "rpawn4";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(3.7,2.4,-3.7);
                 break;
                }
            //end of switch for create red pawns
            this.pawnmodel=pawnmodel;
            break;
            //green pawns
            case 2:
                //create pawns for green class
                switch(this.pawnNumber){
                 case 1:
                    pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                    pawnmodel.meshes[0].name = "gpawn1";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(12.6,2.4,-1.3);
                 break;
                 case 2:
                      pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                      pawnmodel.meshes[0].name = "gpawn2";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(10.3,2.4,-3.7);
                 break;
                 case 3:
                      pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                      pawnmodel.meshes[0].name = "gpawn3";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(10.3,2.4,-1.3);
                 break;
                 case 4:
                      pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
                      pawnmodel.meshes[0].name = "gpawn4";
                    pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
                    pawnmodel.meshes[0].position=new BABYLON.Vector3(12.6,2.4,-3.7);
                 break;
                }
            //end of switch for create red pawns
            this.pawnmodel=pawnmodel;
            var mat = new BABYLON.StandardMaterial("mat", scene);
            mat.diffuseColor = new BABYLON.Color3(0, 1, 0);
            this.pawnmodel.meshes[1].material=mat;

            break;
            //blue pawns
            case 3:
    //create pawns for blue class
    switch(this.pawnNumber){
        case 1:
           pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
           pawnmodel.meshes[0].name = "bpawn1";
           pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
           pawnmodel.meshes[0].position=new BABYLON.Vector3(1.3,2.4,-10.3);
        break;
        case 2:
             pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
             pawnmodel.meshes[0].name = "bpawn2";
           pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
           pawnmodel.meshes[0].position=new BABYLON.Vector3(3.7,2.4,-12.6);
        break;
        case 3:
             pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
             pawnmodel.meshes[0].name = "bpawn3";
           pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
           pawnmodel.meshes[0].position=new BABYLON.Vector3(3.7,2.4,-10.3);
        break;
        case 4:
             pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
             pawnmodel.meshes[0].name = "bpawn4";
           pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
           pawnmodel.meshes[0].position=new BABYLON.Vector3(1.3,2.4,-12.6);
        break;
       }
   //end of switch for create b pawns
   this.pawnmodel=pawnmodel;
   var mat = new BABYLON.StandardMaterial("mat", scene);
   mat.diffuseColor = new BABYLON.Color3(0, 0,1 );
   this.pawnmodel.meshes[1].material=mat;
            break;
            //yellow pawns
            case 4:
 //create pawns for blue class
 switch(this.pawnNumber){
    case 1:
       pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
       pawnmodel.meshes[0].name = "ypawn1";
       pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
       pawnmodel.meshes[0].position=new BABYLON.Vector3(10.3,2.4,-10.3);
    break;
    case 2:
         pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
         pawnmodel.meshes[0].name = "ypawn2";
       pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
       pawnmodel.meshes[0].position=new BABYLON.Vector3(12.6,2.4,-12.6);
    break;
    case 3:
         pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
         pawnmodel.meshes[0].name = "ypawn3";
       pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
       pawnmodel.meshes[0].position=new BABYLON.Vector3(12.6,2.4,-10.3);
    break;
    case 4:
         pawnmodel = await BABYLON.SceneLoader.ImportMeshAsync("", "/assets/", "Pawn.glb", scene);
         pawnmodel.meshes[0].name = "ypawn4";
       pawnmodel.meshes[0].scaling=new BABYLON.Vector3(.4,.4,.4);
       pawnmodel.meshes[0].position=new BABYLON.Vector3(10.3,2.4,-12.6);
    break;
   }
//end of switch for create b pawns
this.pawnmodel=pawnmodel;
var mat = new BABYLON.StandardMaterial("mat", scene);
mat.diffuseColor = new BABYLON.Color3(1, 1,0 );
this.pawnmodel.meshes[1].material=mat;
            break;
    }//end of switch
}//end of createoisoawb
    

    }//end of class pwn
