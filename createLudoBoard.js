var gameBoard = [
    //part I
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T50", tsafe: false }, { ttype: 1, tname: "T51", tsafe: false }, { ttype: 1, tname: "T52", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T49", tsafe: false }, { ttype: 2, tname: "G1", tsafe: false }, { ttype: 2, tname: "T1", tsafe: true }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 6, tname: "T48", tsafe: true }, { ttype: 2, tname: "G2", tsafe: false }, { ttype: 1, tname: "T2", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T47", tsafe: false }, { ttype: 2, tname: "G3", tsafe: false }, { ttype: 1, tname: "T3", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T46", tsafe: false }, { ttype: 2, tname: "G4", tsafe: false }, { ttype: 1, tname: "T4", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T45", tsafe: false }, { ttype: 2, tname: "G5", tsafe: false }, { ttype: 1, tname: "T5", tsafe: false }, 0, 0, 0, 0, 0, 0],
    //part II
    [{ ttype: 1, tname: "T39", tsafe: false }, { ttype: 5, tname: "T40", tsafe: true }, { ttype: 1, tname: "T41", tsafe: false }, { ttype: 1, tname: "T42", tsafe: false }, { ttype: 1, tname: "T43", tsafe: false }, { ttype: 1, tname: "T44", tsafe: false }, { ttype: 6, tname: "C1", tsafe: false }, { ttype: 6, tname: "C2", tsafe: false }, { ttype: 6, tname: "C3", tsafe: false }, { ttype: 1, tname: "T6", tsafe: false }, { ttype: 1, tname: "T7", tsafe: false }, { ttype: 1, tname: "T8", tsafe: false }, { ttype: 6, tname: "T9", tsafe: true }, { ttype: 1, tname: "T10", tsafe: false }, { ttype: 1, tname: "T11", tsafe: false }],
    [{ ttype: 1, tname: "T38", tsafe: false }, { ttype: 5, tname: "R1", tsafe: true }, { ttype: 5, tname: "R2", tsafe: false }, { ttype: 5, tname: "R3", tsafe: false }, { ttype: 5, tname: "R4", tsafe: false }, { ttype: 5, tname: "R5", tsafe: false }, { ttype: 6, tname: "C1", tsafe: false }, { ttype: 6, tname: "C2", tsafe: false }, { ttype: 6, tname: "C3", tsafe: false }, { ttype: 3, tname: "Y5", tsafe: false }, { ttype: 3, tname: "Y4", tsafe: false }, { ttype: 3, tname: "Y3", tsafe: false }, { ttype: 3, tname: "Y2", tsafe: true }, { ttype: 3, tname: "Y1", tsafe: false }, { ttype: 1, tname: "T12", tsafe: false }],
    [{ ttype: 1, tname: "T37", tsafe: false }, { ttype: 1, tname: "T36", tsafe: false }, { ttype: 6, tname: "T35", tsafe: true }, { ttype: 1, tname: "T34", tsafe: false }, { ttype: 1, tname: "T33", tsafe: false }, { ttype: 1, tname: "T32", tsafe: false }, { ttype: 6, tname: "C1", tsafe: false }, { ttype: 6, tname: "C2", tsafe: false }, { ttype: 6, tname: "C3", tsafe: false }, { ttype: 1, tname: "T18", tsafe: false }, { ttype: 1, tname: "T17", tsafe: false }, { ttype: 1, tname: "T16", tsafe: false }, { ttype: 1, tname: "T15", tsafe: false }, { ttype: 3, tname: "T14", tsafe: false }, { ttype: 1, tname: "T13", tsafe: false }],
    //part III
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T31", tsafe: false }, { ttype: 4, tname: "B5", tsafe: false }, { ttype: 1, tname: "T19", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T30", tsafe: false }, { ttype: 4, tname: "B4", tsafe: false }, { ttype: 1, tname: "T20", tsafe: true }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T29", tsafe: true }, { ttype: 4, tname: "B3", tsafe: false }, { ttype: 1, tname: "T21", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T28", tsafe: false }, { ttype: 4, tname: "B2", tsafe: false }, { ttype: 6, tname: "T22", tsafe: true }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 4, tname: "T27", tsafe: true }, { ttype: 4, tname: "B1", tsafe: false }, { ttype: 1, tname: "T23", tsafe: false }, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, { ttype: 1, tname: "T26", tsafe: false }, { ttype: 1, tname: "T25", tsafe: false }, { ttype: 1, tname: "T24", tsafe: false }, 0, 0, 0, 0, 0, 0],
];

createLudoBoard = function(scene) {
    console.log("In createludo board");

    ////0=none, 1=white, Green=2 g, yellow=3, blue=4, red=5, safe=6
    /// Structure {tiletype, tilename, safetile (0=f,1=t)}
 
    for (var j = 0; j <= 14; j++) {
        for (var i = 0; i <= 14; i++) {
            if (gameBoard[j][i] == 0) {
                // console.log("value is 0 do nothing");
            } else {
                // console.log("arr is " + arr[j][i].tname);
                var l = new ludoTiles(gameBoard[j][i].tname, gameBoard[j][i].tsafe, gameBoard[j][i].ttype, scene, i, j);
            } //end of else
        } //end of i for
    } //end of j for
    createStopPits(scene);
    createPawns(scene);
 
}


class ludoTiles {
    tilepos ;
    safetile;
    tilecolor ;

    constructor(tilepos1, safetil1, tilecolor1, scene1, xpos, ypos) {
        this.tilepos = tilepos1;
        this.safetile = safetil1;
        this.tilecolor = tilecolor1;
        // var ground = BABYLON.Mesh.CreateGround("ground1",6,6,2, scene1);
        var sq = BABYLON.MeshBuilder.CreateBox(this.tilepos, { size: .9, width: .95, height: .95, depth: .95 }, scene1);

        sq.setAbsolutePosition(new BABYLON.Vector3(xpos, 0, ypos * -1));

        var mat = new BABYLON.StandardMaterial("mat", scene1);
        //mat.specularColor = new BABYLON.Color3(0.1, 0.19, 0.5);
        switch (this.tilecolor) {
            case 1:
                mat.diffuseColor = new BABYLON.Color3(1, 1, 1);
                break;
            case 2:
                mat.diffuseColor = new BABYLON.Color3(0, 0.81, 0);
                break;
            case 3:
                mat.diffuseColor = new BABYLON.Color3(1, 0.94, 0.08);
                break;
            case 4:
                mat.diffuseColor = new BABYLON.Color3(0, 0.56, 0.82);
                break;
            case 5:
                mat.diffuseColor = new BABYLON.Color3(0.83, 0, 0);
                break;
            case 6:
                //safe need to add additional texture here
                mat.diffuseColor = new BABYLON.Color3(0.96, 0, 0.88);
                break;

        } //end of switch

        sq.material = mat;
    }

    giveSafeStatus(xpos,ypos){
        //take input as position on tile 
        //output is whether board is safe or not
        return gameBoard[j][i].tsafe;
    }
} //end of class ludotiles

createStopPits=(scene1)=>{

    var sq = BABYLON.MeshBuilder.CreateBox("greenStop", { size: 6, width: 6, height: .95, depth: 6 }, scene1);
    sq.setAbsolutePosition(new BABYLON.Vector3(11.5, 0, 2.5*-1));
    var mat = new BABYLON.StandardMaterial("mat", scene1);
    mat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    mat.diffuseTexture = new BABYLON.Texture("assets/pawnstopimg.svg", scene);
    mat.diffuseTexture.hasAlpha = true;
    sq.material = mat;

   
    sq = BABYLON.MeshBuilder.CreateBox("yellowStop", { size: 6, width: 6, height: .95, depth: 6 }, scene1);
    sq.setAbsolutePosition(new BABYLON.Vector3(11.5, 0, 11.5*-1));
    mat = new BABYLON.StandardMaterial("mat", scene1);
    mat.diffuseColor = new BABYLON.Color3(1, 1, 0);
    mat.diffuseTexture = new BABYLON.Texture("assets/pawnstopimg.svg", scene);
    mat.diffuseTexture.hasAlpha = true;
    sq.material = mat;

    sq = BABYLON.MeshBuilder.CreateBox("blueStop", { size: 6, width: 6, height: .95, depth: 6 }, scene1);
    sq.setAbsolutePosition(new BABYLON.Vector3(2.5, 0, 11.5*-1));
    mat = new BABYLON.StandardMaterial("mat", scene1);
    mat.diffuseColor = new BABYLON.Color3(0, .5, 1);
    mat.diffuseTexture = new BABYLON.Texture("assets/pawnstopimg.svg", scene);
    mat.diffuseTexture.hasAlpha = true;
    sq.material = mat;

    sq = BABYLON.MeshBuilder.CreateBox("redStop", { size: 6, width: 6, height: .95, depth: 6 }, scene1);
    sq.setAbsolutePosition(new BABYLON.Vector3(2.5, 0, 2.5*-1));
    mat = new BABYLON.StandardMaterial("mat", scene1);
    mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    mat.diffuseTexture = new BABYLON.Texture("assets/pawnstopimg.svg", scene);
    mat.diffuseTexture.hasAlpha = true;
    sq.material = mat;
}