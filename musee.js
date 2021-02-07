var canvas = document.getElementById("musee");

var engine = new BABYLON.Engine(canvas, true);

console.log('heyhey')

var createScene = function () {

    var scene = new BABYLON.Scene(engine); //On crée une nouvelle scène
    scene.clearColor = new BABYLON.Color3(0, 0, 0); //Couleur par défaut quand il n'y a pas d'élement (soit la couleur au fond)

    //Création d'une caméra avec les paramètres : string nom_camera, Vector3 position, scene
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, 150));

    camera.setTarget(BABYLON.Vector3.Zero()); //On fait regarder la caméra vers l'origine de la scène.

    camera.attachControl(canvas, false); //On attache les contrôles de la scène via le canvas qu'on a crée tout à l'heure dans musee.html

    //Paramètres : string nom, Vector3 orientation_lumière, scene
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene); //On crée une nouvelle lumière générale orientée vers le haut

    light.intensity = 0.1; //On diminue un peu l'intensité de la lumière


    //Paramètres : string nom, int nombre_sous-divisions, int diamètre, scene
    //ligne horizontale
    var sphere1 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere2 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere3 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere4 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere5 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere6 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere7 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere8 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere9 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere10 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere11 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);

    //deuxième vague à gauche
    var sphere101 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere102 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere103 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere104 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere105 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere106 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere107 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere108 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere109 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere110 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);

    var sphere111 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere112 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere113 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere114 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere115 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere116 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere117 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere118 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere119 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere120 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);

    sphere110.position.x = -60;
    sphere109.position.x = -56;
    sphere108.position.x = -52;
    sphere107.position.x = -48;
    sphere106.position.x = -44;
    sphere105.position.x = -40;
    sphere104.position.x = -36;
    sphere103.position.x = -32;
    sphere102.position.x = -28;
    sphere101.position.x = -24;
    sphere1.position.x = -20;
    sphere2.position.x = -16;
    sphere3.position.x = -12;
    sphere4.position.x = -8;
    sphere5.position.x = -4;
    sphere6.position.x = 0;
    sphere7.position.x = 4;
    sphere8.position.x = 8;
    sphere9.position.x = 12;
    sphere10.position.x = 16;
    sphere11.position.x = 20;
    sphere111.position.x = 24;
    sphere112.position.x = 28;
    sphere113.position.x = 32;
    sphere114.position.x = 36;
    sphere115.position.x = 40;
    sphere116.position.x = 44;
    sphere117.position.x = 48;
    sphere118.position.x = 52;
    sphere119.position.x = 56;
    sphere120.position.x = 60;


    //ligne Z
    var sphere12 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere13 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere14 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere15 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere16 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere17 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere19 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere20 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere21 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere22 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere312 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere313 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere314 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere315 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere316 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere317 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere319 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere320 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere321 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere322 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere212 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere213 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere214 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere215 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere216 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere217 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere219 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere220 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere221 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere222 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);

    sphere213.position.z = -60;
    sphere214.position.z = -56;
    sphere215.position.z = -52;
    sphere216.position.z = -48;
    sphere217.position.z = -44;
    sphere313.position.z = -40;
    sphere314.position.z = -36;
    sphere315.position.z = -32;
    sphere316.position.z = -28;
    sphere317.position.z = -24;
    sphere13.position.z = -20;
    sphere14.position.z = -16;
    sphere15.position.z = -12;
    sphere16.position.z = -8;
    sphere17.position.z = -4;
    sphere19.position.z = 4;
    sphere20.position.z = 8;
    sphere21.position.z = 12;
    sphere22.position.z = 16;
    sphere12.position.z = 20;
    sphere319.position.z = 24;
    sphere320.position.z = 28;
    sphere321.position.z = 32;
    sphere322.position.z = 36;
    sphere312.position.z = 40;
    sphere219.position.z = 44;
    sphere220.position.z = 48;
    sphere221.position.z = 52;
    sphere222.position.z = 56;
    sphere212.position.z = 60;

    //ligne xz
    //diag1
    var sphere23 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere24 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere25 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere26 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere27 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere29 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere30 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere31 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere32 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere33 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere123 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere124 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere125 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere126 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere127 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere129 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere130 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere131 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere132 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere133 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere225 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere226 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere227 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere229 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere230 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere231 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);

    sphere225.position = new BABYLON.Vector3(-52, 0, -52);
    sphere226.position = new BABYLON.Vector3(-48, 0, -48);
    sphere227.position = new BABYLON.Vector3(-44, 0, -44);
    sphere123.position = new BABYLON.Vector3(-40, 0, -40);
    sphere124.position = new BABYLON.Vector3(-36, 0, -36);
    sphere125.position = new BABYLON.Vector3(-32, 0, -32);
    sphere126.position = new BABYLON.Vector3(-28, 0, -28);
    sphere127.position = new BABYLON.Vector3(-24, 0, -24);
    sphere23.position = new BABYLON.Vector3(-20, 0, -20);
    sphere24.position = new BABYLON.Vector3(-16, 0, -16);
    sphere25.position = new BABYLON.Vector3(-12, 0, -12);
    sphere26.position = new BABYLON.Vector3(-8, 0, -8);
    sphere27.position = new BABYLON.Vector3(-4, 0, -4);
    sphere29.position = new BABYLON.Vector3(4, 0, 4);
    sphere30.position = new BABYLON.Vector3(8, 0, 8);
    sphere31.position = new BABYLON.Vector3(12, 0, 12);
    sphere32.position = new BABYLON.Vector3(16, 0, 16);
    sphere33.position = new BABYLON.Vector3(20, 0, 20);
    sphere129.position = new BABYLON.Vector3(24, 0, 24);
    sphere130.position = new BABYLON.Vector3(28, 0, 28);
    sphere131.position = new BABYLON.Vector3(32, 0, 32);
    sphere132.position = new BABYLON.Vector3(36, 0, 36);
    sphere133.position = new BABYLON.Vector3(40, 0, 40);
    sphere229.position = new BABYLON.Vector3(44, 0, 44);
    sphere230.position = new BABYLON.Vector3(48, 0, 48);
    sphere231.position = new BABYLON.Vector3(52, 0, 52);


    //diag 2 
    var sphere34 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere35 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere36 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere37 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere39 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere40 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere41 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere42 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere43 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere44 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere134 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere135 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere136 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere137 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere139 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere140 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere141 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere142 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere143 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere144 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere235 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere236 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere237 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere239 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere240 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);
    var sphere241 = BABYLON.Mesh.CreateSphere("sphere", 16, 2, scene);

    sphere235.position = new BABYLON.Vector3(-52, 0, 52);
    sphere236.position = new BABYLON.Vector3(-48, 0, 48);
    sphere237.position = new BABYLON.Vector3(-44, 0, 44);
    sphere144.position = new BABYLON.Vector3(-40, 0, 40);
    sphere134.position = new BABYLON.Vector3(-36, 0, 36);
    sphere135.position = new BABYLON.Vector3(-32, 0, 32);
    sphere136.position = new BABYLON.Vector3(-28, 0, 28);
    sphere137.position = new BABYLON.Vector3(-24, 0, 24);
    sphere44.position = new BABYLON.Vector3(-20, 0, 20);
    sphere34.position = new BABYLON.Vector3(-16, 0, 16);
    sphere35.position = new BABYLON.Vector3(-12, 0, 12);
    sphere36.position = new BABYLON.Vector3(-8, 0, 8);
    sphere37.position = new BABYLON.Vector3(-4, 0, 4);
    sphere39.position = new BABYLON.Vector3(4, 0, -4);
    sphere40.position = new BABYLON.Vector3(8, 0, -8);
    sphere41.position = new BABYLON.Vector3(12, 0, -12);
    sphere42.position = new BABYLON.Vector3(16, 0, -16);
    sphere43.position = new BABYLON.Vector3(20, 0, -20);
    sphere139.position = new BABYLON.Vector3(24, 0, -24);
    sphere140.position = new BABYLON.Vector3(28, 0, -28);
    sphere141.position = new BABYLON.Vector3(32, 0, -32);
    sphere142.position = new BABYLON.Vector3(36, 0, -36);
    sphere143.position = new BABYLON.Vector3(40, 0, -40);
    sphere239.position = new BABYLON.Vector3(44, 0, -44);
    sphere240.position = new BABYLON.Vector3(48, 0, -48);
    sphere241.position = new BABYLON.Vector3(52, 0, -52);


    // var phi = 0;
    // var chi = 0;

    // var a34 = 6;
    // var a33 = 17/3;
    // var a32 = 16/3;
    // var a31 = 5;
    // var a30 = 14/3;
    // var a29 = 13/3;
    // var a28 = 4;
    // var a27 = 11/3;
    // var a26 = 10/3;
    // var a25 = 3;
    // var a24 = 8/3;
    // var a23 = 7/3;
    // var a22 = 2;
    // var a21 = 5/3;
    // var a20 = 4/3;
    var a1 = 1;
    var a2 = 2 / 3;
    var a3 = 1 / 3;
    var a4 = 0;
    var a5 = -1 / 3;
    var a6 = -2 / 3;
    var a7 = -1;
    var a8 = -4 / 3;
    var a9 = -5 / 3;
    var a10 = -2;
    var a11 = -7 / 3;
    var a12 = -8 / 3;
    var a13 = -3;
    var a14 = -10 / 3;
    var a15 = -11 / 3;
    var a16 = -4;


    let wave = () => {
        scene.registerAfterRender(function () {
            //ligne x
            sphere110.position.y = 10 * Math.sin(a16);
            sphere109.position.y = 10 * Math.sin(a15);
            sphere108.position.y = 10 * Math.sin(a14);
            sphere107.position.y = 10 * Math.sin(a13);
            sphere106.position.y = 10 * Math.sin(a12);
            sphere105.position.y = 10 * Math.sin(a11);
            sphere104.position.y = 10 * Math.sin(a10);
            sphere103.position.y = 10 * Math.sin(a9);
            sphere102.position.y = 10 * Math.sin(a8);
            sphere101.position.y = 10 * Math.sin(a7);
            sphere1.position.y = 10 * Math.sin(a6);
            sphere2.position.y = 10 * Math.sin(a5);
            sphere3.position.y = 10 * Math.sin(a4);
            sphere4.position.y = 10 * Math.sin(a3);
            sphere5.position.y = 10 * Math.sin(a2);
            sphere6.position.y = 10 * Math.sin(a1);
            sphere7.position.y = 10 * Math.sin(a2);
            sphere8.position.y = 10 * Math.sin(a3);
            sphere9.position.y = 10 * Math.sin(a4);
            sphere10.position.y = 10 * Math.sin(a5);
            sphere11.position.y = 10 * Math.sin(a6);
            sphere111.position.y = 10 * Math.sin(a7);
            sphere112.position.y = 10 * Math.sin(a8);
            sphere113.position.y = 10 * Math.sin(a9);
            sphere114.position.y = 10 * Math.sin(a10);
            sphere115.position.y = 10 * Math.sin(a11);
            sphere116.position.y = 10 * Math.sin(a12);
            sphere117.position.y = 10 * Math.sin(a13);
            sphere118.position.y = 10 * Math.sin(a14);
            sphere119.position.y = 10 * Math.sin(a15);
            sphere120.position.y = 10 * Math.sin(a16);

            //ligne z
            sphere213.position.y = 10 * Math.sin(a16);
            sphere214.position.y = 10 * Math.sin(a15);
            sphere215.position.y = 10 * Math.sin(a14);
            sphere216.position.y = 10 * Math.sin(a13);
            sphere217.position.y = 10 * Math.sin(a12);
            sphere313.position.y = 10 * Math.sin(a11);
            sphere314.position.y = 10 * Math.sin(a10);
            sphere315.position.y = 10 * Math.sin(a9);
            sphere316.position.y = 10 * Math.sin(a8);
            sphere317.position.y = 10 * Math.sin(a7);
            sphere13.position.y = 10 * Math.sin(a6);
            sphere14.position.y = 10 * Math.sin(a5);
            sphere15.position.y = 10 * Math.sin(a4);
            sphere16.position.y = 10 * Math.sin(a3);
            sphere17.position.y = 10 * Math.sin(a2);
            sphere19.position.y = 10 * Math.sin(a2);
            sphere20.position.y = 10 * Math.sin(a3);
            sphere21.position.y = 10 * Math.sin(a4);
            sphere22.position.y = 10 * Math.sin(a5);
            sphere12.position.y = 10 * Math.sin(a6);
            sphere319.position.y = 10 * Math.sin(a7);
            sphere320.position.y = 10 * Math.sin(a8);
            sphere321.position.y = 10 * Math.sin(a9);
            sphere322.position.y = 10 * Math.sin(a10);
            sphere312.position.y = 10 * Math.sin(a11);
            sphere219.position.y = 10 * Math.sin(a12);
            sphere220.position.y = 10 * Math.sin(a13);
            sphere221.position.y = 10 * Math.sin(a14);
            sphere222.position.y = 10 * Math.sin(a15);
            sphere212.position.y = 10 * Math.sin(a16);


            //diag 1 
            sphere225.position.y = 10 * Math.sin(a14);
            sphere226.position.y = 10 * Math.sin(a13);
            sphere227.position.y = 10 * Math.sin(a12);
            sphere123.position.y = 10 * Math.sin(a11);
            sphere124.position.y = 10 * Math.sin(a10);
            sphere125.position.y = 10 * Math.sin(a9);
            sphere126.position.y = 10 * Math.sin(a8);
            sphere127.position.y = 10 * Math.sin(a7);
            sphere23.position.y = 10 * Math.sin(a6);
            sphere24.position.y = 10 * Math.sin(a5);
            sphere25.position.y = 10 * Math.sin(a4);
            sphere26.position.y = 10 * Math.sin(a3);
            sphere27.position.y = 10 * Math.sin(a2);
            sphere29.position.y = 10 * Math.sin(a2);
            sphere30.position.y = 10 * Math.sin(a3);
            sphere31.position.y = 10 * Math.sin(a4);
            sphere32.position.y = 10 * Math.sin(a5);
            sphere33.position.y = 10 * Math.sin(a6);
            sphere129.position.y = 10 * Math.sin(a7);
            sphere130.position.y = 10 * Math.sin(a8);
            sphere131.position.y = 10 * Math.sin(a9);
            sphere132.position.y = 10 * Math.sin(a10);
            sphere133.position.y = 10 * Math.sin(a11);
            sphere229.position.y = 10 * Math.sin(a12);
            sphere230.position.y = 10 * Math.sin(a13);
            sphere231.position.y = 10 * Math.sin(a14);


            //diag 2 en haut à gauche jusqu'en bas à droite
            sphere235.position.y = 10 * Math.sin(a14);
            sphere236.position.y = 10 * Math.sin(a13);
            sphere237.position.y = 10 * Math.sin(a12);
            sphere144.position.y = 10 * Math.sin(a11);
            sphere134.position.y = 10 * Math.sin(a10);
            sphere135.position.y = 10 * Math.sin(a9);
            sphere136.position.y = 10 * Math.sin(a8);
            sphere137.position.y = 10 * Math.sin(a7);
            sphere44.position.y = 10 * Math.sin(a6);
            sphere34.position.y = 10 * Math.sin(a5);
            sphere35.position.y = 10 * Math.sin(a4);
            sphere36.position.y = 10 * Math.sin(a3);
            sphere37.position.y = 10 * Math.sin(a2);
            sphere39.position.y = 10 * Math.sin(a2);
            sphere40.position.y = 10 * Math.sin(a3);
            sphere41.position.y = 10 * Math.sin(a4);
            sphere42.position.y = 10 * Math.sin(a5);
            sphere43.position.y = 10 * Math.sin(a6);
            sphere139.position.y = 10 * Math.sin(a7);
            sphere140.position.y = 10 * Math.sin(a8);
            sphere141.position.y = 10 * Math.sin(a9);
            sphere142.position.y = 10 * Math.sin(a10);
            sphere143.position.y = 10 * Math.sin(a11);
            sphere239.position.y = 10 * Math.sin(a12);
            sphere240.position.y = 10 * Math.sin(a13);
            sphere241.position.y = 10 * Math.sin(a14);

            //colors 
            var sphere1Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor1 = sphere1.position.y;
            sphere1Color.diffuseColor = new BABYLON.Color3(ycolor1, ycolor1, ycolor1);
            sphere1.material = sphere1Color;

            var sphere2Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor2 = sphere2.position.y;
            sphere2Color.diffuseColor = new BABYLON.Color3(ycolor2, ycolor2, ycolor2);
            sphere2.material = sphere2Color;



            var sphere3Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor3 = sphere3.position.y;
            sphere3Color.diffuseColor = new BABYLON.Color3(ycolor3, ycolor3, ycolor3);
            sphere3.material = sphere3Color;

            var sphere4Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor4 = sphere4.position.y;
            sphere4Color.diffuseColor = new BABYLON.Color3(ycolor4, ycolor4, ycolor4);
            sphere4.material = sphere4Color;

            var sphere5Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor5 = sphere5.position.y;
            sphere5Color.diffuseColor = new BABYLON.Color3(ycolor5, ycolor5, ycolor5);
            sphere5.material = sphere5Color;

            var sphere6Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor6 = sphere6.position.y;
            sphere6Color.diffuseColor = new BABYLON.Color3(ycolor6, ycolor6, ycolor6);
            sphere6.material = sphere6Color;

            var sphere7Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor7 = sphere7.position.y;
            sphere7Color.diffuseColor = new BABYLON.Color3(ycolor7, ycolor7, ycolor7);
            sphere7.material = sphere7Color;

            var sphere8Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor8 = sphere8.position.y;
            sphere8Color.diffuseColor = new BABYLON.Color3(ycolor8, ycolor8, ycolor8);
            sphere8.material = sphere8Color;

            var sphere9Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor9 = sphere9.position.y;
            sphere9Color.diffuseColor = new BABYLON.Color3(ycolor9, ycolor9, ycolor9);
            sphere9.material = sphere9Color;

            var sphere10Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor10 = sphere10.position.y;
            sphere10Color.diffuseColor = new BABYLON.Color3(ycolor10, ycolor10, ycolor10);
            sphere10.material = sphere10Color;

            var sphere11Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor11 = sphere11.position.y;
            sphere11Color.diffuseColor = new BABYLON.Color3(ycolor11, ycolor11, ycolor11);
            sphere11.material = sphere11Color;

            var sphere12Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor12 = sphere12.position.y;
            sphere12Color.diffuseColor = new BABYLON.Color3(ycolor12, ycolor12, ycolor12);
            sphere12.material = sphere12Color;

            var sphere13Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor13 = sphere13.position.y;
            sphere13Color.diffuseColor = new BABYLON.Color3(ycolor13, ycolor13, ycolor13);
            sphere13.material = sphere13Color;

            var sphere14Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor14 = sphere14.position.y;
            sphere14Color.diffuseColor = new BABYLON.Color3(ycolor14, ycolor14, ycolor14);
            sphere14.material = sphere14Color;

            var sphere15Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor15 = sphere15.position.y;
            sphere15Color.diffuseColor = new BABYLON.Color3(ycolor15, ycolor15, ycolor15);
            sphere15.material = sphere15Color;

            var sphere16Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor16 = sphere16.position.y;
            sphere16Color.diffuseColor = new BABYLON.Color3(ycolor16, ycolor16, ycolor16);
            sphere16.material = sphere16Color;

            var sphere17Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor17 = sphere17.position.y;
            sphere17Color.diffuseColor = new BABYLON.Color3(ycolor17, ycolor17, ycolor17);
            sphere17.material = sphere17Color;

            var sphere19Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor19 = sphere19.position.y;
            sphere19Color.diffuseColor = new BABYLON.Color3(ycolor19, ycolor19, ycolor19);
            sphere19.material = sphere19Color;

            var sphere20Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor20 = sphere20.position.y;
            sphere20Color.diffuseColor = new BABYLON.Color3(ycolor20, ycolor20, ycolor20);
            sphere20.material = sphere20Color;

            var sphere21Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor21 = sphere21.position.y;
            sphere21Color.diffuseColor = new BABYLON.Color3(ycolor21, ycolor21, ycolor21);
            sphere21.material = sphere21Color;

            var sphere22Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor22 = sphere22.position.y;
            sphere22Color.diffuseColor = new BABYLON.Color3(ycolor22, ycolor22, ycolor22);
            sphere22.material = sphere22Color;

            var sphere23Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor23 = sphere23.position.y;
            sphere23Color.diffuseColor = new BABYLON.Color3(ycolor23, ycolor23, ycolor23);
            sphere23.material = sphere23Color;

            var sphere24Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor24 = sphere24.position.y;
            sphere24Color.diffuseColor = new BABYLON.Color3(ycolor24, ycolor24, ycolor24);
            sphere24.material = sphere24Color;

            var sphere25Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor25 = sphere25.position.y;
            sphere25Color.diffuseColor = new BABYLON.Color3(ycolor25, ycolor25, ycolor25);
            sphere25.material = sphere25Color;

            var sphere26Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor26 = sphere26.position.y;
            sphere26Color.diffuseColor = new BABYLON.Color3(ycolor26, ycolor26, ycolor26);
            sphere26.material = sphere26Color;

            var sphere27Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor27 = sphere27.position.y;
            sphere27Color.diffuseColor = new BABYLON.Color3(ycolor27, ycolor27, ycolor27);
            sphere27.material = sphere27Color;

            var sphere29Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor29 = sphere29.position.y;
            sphere29Color.diffuseColor = new BABYLON.Color3(ycolor29, ycolor29, ycolor29);
            sphere29.material = sphere29Color;

            var sphere30Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor30 = sphere30.position.y;
            sphere30Color.diffuseColor = new BABYLON.Color3(ycolor30, ycolor30, ycolor30);
            sphere30.material = sphere30Color;

            var sphere31Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor31 = sphere31.position.y;
            sphere31Color.diffuseColor = new BABYLON.Color3(ycolor31, ycolor31, ycolor31);
            sphere31.material = sphere31Color;

            var sphere32Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor32 = sphere32.position.y;
            sphere32Color.diffuseColor = new BABYLON.Color3(ycolor32, ycolor32, ycolor32);
            sphere32.material = sphere32Color;

            var sphere33Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor33 = sphere33.position.y;
            sphere33Color.diffuseColor = new BABYLON.Color3(ycolor33, ycolor33, ycolor33);
            sphere33.material = sphere33Color;

            var sphere34Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor34 = sphere34.position.y;
            sphere34Color.diffuseColor = new BABYLON.Color3(ycolor34, ycolor34, ycolor34);
            sphere34.material = sphere34Color;

            var sphere35Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor35 = sphere35.position.y;
            sphere35Color.diffuseColor = new BABYLON.Color3(ycolor35, ycolor35, ycolor35);
            sphere35.material = sphere35Color;

            var sphere36Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor36 = sphere36.position.y;
            sphere36Color.diffuseColor = new BABYLON.Color3(ycolor36, ycolor36, ycolor36);
            sphere36.material = sphere36Color;

            var sphere37Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor37 = sphere37.position.y;
            sphere37Color.diffuseColor = new BABYLON.Color3(ycolor37, ycolor37, ycolor37);
            sphere37.material = sphere37Color;

            var sphere39Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor39 = sphere39.position.y;
            sphere39Color.diffuseColor = new BABYLON.Color3(ycolor39, ycolor39, ycolor39);
            sphere39.material = sphere39Color;

            var sphere40Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor40 = sphere40.position.y;
            sphere40Color.diffuseColor = new BABYLON.Color3(ycolor40, ycolor40, ycolor40);
            sphere40.material = sphere40Color;

            var sphere41Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor41 = sphere41.position.y;
            sphere41Color.diffuseColor = new BABYLON.Color3(ycolor41, ycolor41, ycolor41);
            sphere41.material = sphere41Color;

            var sphere42Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor42 = sphere42.position.y;
            sphere42Color.diffuseColor = new BABYLON.Color3(ycolor42, ycolor42, ycolor42);
            sphere42.material = sphere42Color;

            var sphere43Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor43 = sphere43.position.y;
            sphere43Color.diffuseColor = new BABYLON.Color3(ycolor43, ycolor43, ycolor43);
            sphere43.material = sphere43Color;

            var sphere44Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor44 = sphere44.position.y;
            sphere44Color.diffuseColor = new BABYLON.Color3(ycolor44, ycolor44, ycolor44);
            sphere44.material = sphere44Color;



            var sphere101Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor101 = sphere1.position.y;
            sphere101Color.diffuseColor = new BABYLON.Color3(ycolor101, ycolor101, ycolor101);
            sphere101.material = sphere101Color;

            var sphere102Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor102 = sphere102.position.y;
            sphere102Color.diffuseColor = new BABYLON.Color3(ycolor102, ycolor102, ycolor102);
            sphere102.material = sphere102Color;

            var sphere103Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor103 = sphere103.position.y;
            sphere103Color.diffuseColor = new BABYLON.Color3(ycolor103, ycolor103, ycolor103);
            sphere103.material = sphere103Color;

            var sphere104Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor104 = sphere104.position.y;
            sphere104Color.diffuseColor = new BABYLON.Color3(ycolor104, ycolor104, ycolor104);
            sphere104.material = sphere104Color;

            var sphere105Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor105 = sphere105.position.y;
            sphere105Color.diffuseColor = new BABYLON.Color3(ycolor105, ycolor105, ycolor105);
            sphere105.material = sphere105Color;

            var sphere106Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor106 = sphere106.position.y;
            sphere106Color.diffuseColor = new BABYLON.Color3(ycolor106, ycolor106, ycolor106);
            sphere106.material = sphere106Color;

            var sphere107Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor107 = sphere107.position.y;
            sphere107Color.diffuseColor = new BABYLON.Color3(ycolor107, ycolor107, ycolor107);
            sphere107.material = sphere107Color;

            var sphere108Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor108 = sphere108.position.y;
            sphere108Color.diffuseColor = new BABYLON.Color3(ycolor108, ycolor108, ycolor108);
            sphere108.material = sphere108Color;

            var sphere109Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor109 = sphere109.position.y;
            sphere109Color.diffuseColor = new BABYLON.Color3(ycolor109, ycolor109, ycolor109);
            sphere109.material = sphere109Color;

            var sphere110Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor110 = sphere110.position.y;
            sphere110Color.diffuseColor = new BABYLON.Color3(ycolor110, ycolor110, ycolor110);
            sphere110.material = sphere110Color;

            var sphere111Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor111 = sphere111.position.y;
            sphere111Color.diffuseColor = new BABYLON.Color3(ycolor111, ycolor111, ycolor111);
            sphere111.material = sphere111Color;

            var sphere112Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor112 = sphere112.position.y;
            sphere112Color.diffuseColor = new BABYLON.Color3(ycolor112, ycolor112, ycolor112);
            sphere112.material = sphere112Color;

            var sphere113Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor113 = sphere113.position.y;
            sphere113Color.diffuseColor = new BABYLON.Color3(ycolor113, ycolor113, ycolor113);
            sphere113.material = sphere113Color;

            var sphere114Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor114 = sphere114.position.y;
            sphere114Color.diffuseColor = new BABYLON.Color3(ycolor114, ycolor114, ycolor114);
            sphere114.material = sphere114Color;

            var sphere115Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor115 = sphere115.position.y;
            sphere115Color.diffuseColor = new BABYLON.Color3(ycolor115, ycolor115, ycolor115);
            sphere115.material = sphere115Color;

            var sphere116Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor116 = sphere116.position.y;
            sphere116Color.diffuseColor = new BABYLON.Color3(ycolor116, ycolor116, ycolor116);
            sphere116.material = sphere116Color;

            var sphere117Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor117 = sphere117.position.y;
            sphere117Color.diffuseColor = new BABYLON.Color3(ycolor117, ycolor117, ycolor117);
            sphere117.material = sphere117Color;

            var sphere118Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor118 = sphere118.position.y;
            sphere118Color.diffuseColor = new BABYLON.Color3(ycolor118, ycolor118, ycolor118);
            sphere118.material = sphere118Color;

            var sphere119Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor119 = sphere119.position.y;
            sphere119Color.diffuseColor = new BABYLON.Color3(ycolor119, ycolor119, ycolor119);
            sphere119.material = sphere119Color;

            var sphere120Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor120 = sphere120.position.y;
            sphere120Color.diffuseColor = new BABYLON.Color3(ycolor120, ycolor120, ycolor120);
            sphere120.material = sphere120Color;

            var sphere123Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor123 = sphere123.position.y;
            sphere123Color.diffuseColor = new BABYLON.Color3(ycolor123, ycolor123, ycolor123);
            sphere123.material = sphere123Color;

            var sphere124Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor124 = sphere124.position.y;
            sphere124Color.diffuseColor = new BABYLON.Color3(ycolor124, ycolor124, ycolor124);
            sphere124.material = sphere124Color;

            var sphere125Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor125 = sphere125.position.y;
            sphere125Color.diffuseColor = new BABYLON.Color3(ycolor125, ycolor125, ycolor125);
            sphere125.material = sphere125Color;

            var sphere126Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor126 = sphere126.position.y;
            sphere126Color.diffuseColor = new BABYLON.Color3(ycolor126, ycolor126, ycolor126);
            sphere126.material = sphere126Color;

            var sphere127Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor127 = sphere127.position.y;
            sphere127Color.diffuseColor = new BABYLON.Color3(ycolor127, ycolor127, ycolor127);
            sphere127.material = sphere127Color;

            var sphere129Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor129 = sphere129.position.y;
            sphere129Color.diffuseColor = new BABYLON.Color3(ycolor129, ycolor129, ycolor129);
            sphere129.material = sphere129Color;

            var sphere130Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor130 = sphere130.position.y;
            sphere130Color.diffuseColor = new BABYLON.Color3(ycolor130, ycolor130, ycolor130);
            sphere130.material = sphere130Color;

            var sphere131Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor131 = sphere131.position.y;
            sphere131Color.diffuseColor = new BABYLON.Color3(ycolor131, ycolor131, ycolor131);
            sphere131.material = sphere131Color;

            var sphere132Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor132 = sphere132.position.y;
            sphere132Color.diffuseColor = new BABYLON.Color3(ycolor132, ycolor132, ycolor132);
            sphere132.material = sphere132Color;

            var sphere133Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor133 = sphere133.position.y;
            sphere133Color.diffuseColor = new BABYLON.Color3(ycolor133, ycolor133, ycolor133);
            sphere133.material = sphere133Color;

            var sphere134Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor134 = sphere134.position.y;
            sphere134Color.diffuseColor = new BABYLON.Color3(ycolor134, ycolor134, ycolor134);
            sphere134.material = sphere134Color;

            var sphere135Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor135 = sphere135.position.y;
            sphere135Color.diffuseColor = new BABYLON.Color3(ycolor135, ycolor135, ycolor135);
            sphere135.material = sphere135Color;

            var sphere136Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor136 = sphere136.position.y;
            sphere136Color.diffuseColor = new BABYLON.Color3(ycolor136, ycolor136, ycolor136);
            sphere136.material = sphere136Color;

            var sphere137Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor137 = sphere137.position.y;
            sphere137Color.diffuseColor = new BABYLON.Color3(ycolor137, ycolor137, ycolor137);
            sphere137.material = sphere137Color;

            var sphere139Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor139 = sphere139.position.y;
            sphere139Color.diffuseColor = new BABYLON.Color3(ycolor139, ycolor139, ycolor139);
            sphere139.material = sphere139Color;

            var sphere140Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor140 = sphere140.position.y;
            sphere140Color.diffuseColor = new BABYLON.Color3(ycolor140, ycolor140, ycolor140);
            sphere140.material = sphere140Color;

            var sphere141Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor141 = sphere141.position.y;
            sphere141Color.diffuseColor = new BABYLON.Color3(ycolor141, ycolor141, ycolor141);
            sphere141.material = sphere141Color;

            var sphere142Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor142 = sphere142.position.y;
            sphere142Color.diffuseColor = new BABYLON.Color3(ycolor142, ycolor142, ycolor142);
            sphere142.material = sphere142Color;

            var sphere143Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor143 = sphere143.position.y;
            sphere143Color.diffuseColor = new BABYLON.Color3(ycolor143, ycolor143, ycolor143);
            sphere143.material = sphere143Color;

            var sphere144Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor144 = sphere144.position.y;
            sphere144Color.diffuseColor = new BABYLON.Color3(ycolor144, ycolor144, ycolor144);
            sphere144.material = sphere144Color;



            var sphere212Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor212 = sphere212.position.y;
            sphere212Color.diffuseColor = new BABYLON.Color3(ycolor212, ycolor212, ycolor212);
            sphere212.material = sphere212Color;

            var sphere213Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor213 = sphere213.position.y;
            sphere213Color.diffuseColor = new BABYLON.Color3(ycolor213, ycolor213, ycolor213);
            sphere213.material = sphere213Color;

            var sphere214Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor214 = sphere214.position.y;
            sphere214Color.diffuseColor = new BABYLON.Color3(ycolor214, ycolor214, ycolor214);
            sphere214.material = sphere214Color;

            var sphere215Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor215 = sphere215.position.y;
            sphere215Color.diffuseColor = new BABYLON.Color3(ycolor215, ycolor215, ycolor215);
            sphere215.material = sphere215Color;

            var sphere216Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor216 = sphere216.position.y;
            sphere216Color.diffuseColor = new BABYLON.Color3(ycolor216, ycolor216, ycolor216);
            sphere216.material = sphere216Color;

            var sphere217Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor217 = sphere217.position.y;
            sphere217Color.diffuseColor = new BABYLON.Color3(ycolor217, ycolor217, ycolor217);
            sphere217.material = sphere217Color;

            var sphere219Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor219 = sphere219.position.y;
            sphere219Color.diffuseColor = new BABYLON.Color3(ycolor219, ycolor219, ycolor219);
            sphere219.material = sphere219Color;

            var sphere220Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor220 = sphere220.position.y;
            sphere220Color.diffuseColor = new BABYLON.Color3(ycolor220, ycolor220, ycolor220);
            sphere220.material = sphere220Color;

            var sphere221Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor221 = sphere221.position.y;
            sphere221Color.diffuseColor = new BABYLON.Color3(ycolor221, ycolor221, ycolor221);
            sphere221.material = sphere221Color;

            var sphere222Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor222 = sphere222.position.y;
            sphere222Color.diffuseColor = new BABYLON.Color3(ycolor222, ycolor222, ycolor222);
            sphere222.material = sphere222Color;

            var sphere225Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor225 = sphere225.position.y;
            sphere225Color.diffuseColor = new BABYLON.Color3(ycolor225, ycolor225, ycolor225);
            sphere225.material = sphere225Color;

            var sphere226Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor226 = sphere226.position.y;
            sphere226Color.diffuseColor = new BABYLON.Color3(ycolor226, ycolor226, ycolor226);
            sphere226.material = sphere226Color;

            var sphere227Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor227 = sphere227.position.y;
            sphere227Color.diffuseColor = new BABYLON.Color3(ycolor227, ycolor227, ycolor227);
            sphere227.material = sphere227Color;

            var sphere229Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor229 = sphere229.position.y;
            sphere229Color.diffuseColor = new BABYLON.Color3(ycolor229, ycolor229, ycolor229);
            sphere229.material = sphere229Color;

            var sphere230Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor230 = sphere230.position.y;
            sphere230Color.diffuseColor = new BABYLON.Color3(ycolor230, ycolor230, ycolor230);
            sphere230.material = sphere230Color;

            var sphere231Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor231 = sphere231.position.y;
            sphere231Color.diffuseColor = new BABYLON.Color3(ycolor231, ycolor231, ycolor231);
            sphere231.material = sphere231Color;

            var sphere235Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor235 = sphere235.position.y;
            sphere235Color.diffuseColor = new BABYLON.Color3(ycolor235, ycolor235, ycolor235);
            sphere235.material = sphere235Color;

            var sphere236Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor236 = sphere236.position.y;
            sphere236Color.diffuseColor = new BABYLON.Color3(ycolor236, ycolor236, ycolor236);
            sphere236.material = sphere236Color;

            var sphere237Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor237 = sphere237.position.y;
            sphere237Color.diffuseColor = new BABYLON.Color3(ycolor237, ycolor237, ycolor237);
            sphere237.material = sphere237Color;

            var sphere239Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor239 = sphere239.position.y;
            sphere239Color.diffuseColor = new BABYLON.Color3(ycolor239, ycolor239, ycolor239);
            sphere239.material = sphere239Color;

            var sphere240Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor240 = sphere240.position.y;
            sphere240Color.diffuseColor = new BABYLON.Color3(ycolor240, ycolor240, ycolor240);
            sphere240.material = sphere240Color;

            var sphere241Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor241 = sphere241.position.y;
            sphere241Color.diffuseColor = new BABYLON.Color3(ycolor241, ycolor241, ycolor241);
            sphere241.material = sphere241Color;


            var sphere312Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor312 = sphere312.position.y;
            sphere312Color.diffuseColor = new BABYLON.Color3(ycolor312, ycolor312, ycolor312);
            sphere312.material = sphere312Color;

            var sphere313Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor313 = sphere313.position.y;
            sphere313Color.diffuseColor = new BABYLON.Color3(ycolor313, ycolor313, ycolor313);
            sphere313.material = sphere313Color;

            var sphere314Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor314 = sphere314.position.y;
            sphere314Color.diffuseColor = new BABYLON.Color3(ycolor314, ycolor314, ycolor314);
            sphere314.material = sphere314Color;

            var sphere315Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor315 = sphere315.position.y;
            sphere315Color.diffuseColor = new BABYLON.Color3(ycolor315, ycolor315, ycolor315);
            sphere315.material = sphere315Color;

            var sphere316Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor316 = sphere316.position.y;
            sphere316Color.diffuseColor = new BABYLON.Color3(ycolor316, ycolor316, ycolor316);
            sphere316.material = sphere316Color;

            var sphere317Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor317 = sphere317.position.y;
            sphere317Color.diffuseColor = new BABYLON.Color3(ycolor317, ycolor317, ycolor317);
            sphere317.material = sphere317Color;

            var sphere319Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor319 = sphere319.position.y;
            sphere319Color.diffuseColor = new BABYLON.Color3(ycolor319, ycolor319, ycolor319);
            sphere319.material = sphere319Color;

            var sphere320Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor320 = sphere320.position.y;
            sphere320Color.diffuseColor = new BABYLON.Color3(ycolor320, ycolor320, ycolor320);
            sphere320.material = sphere320Color;

            var sphere321Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor321 = sphere321.position.y;
            sphere321Color.diffuseColor = new BABYLON.Color3(ycolor321, ycolor321, ycolor321);
            sphere321.material = sphere321Color;

            var sphere322Color = new BABYLON.StandardMaterial("myMaterial", scene);
            var ycolor322 = sphere322.position.y;
            sphere322Color.diffuseColor = new BABYLON.Color3(ycolor322, ycolor322, ycolor322);
            sphere322.material = sphere322Color;

            


            a1 += 0.02;
            a2 += 0.02;
            a3 += 0.02;
            a4 += 0.02;
            a5 += 0.02;
            a6 += 0.02;
            a7 += 0.02;
            a8 += 0.02;
            a9 += 0.02;
            a10 += 0.02;
            a11 += 0.02;
            a12 += 0.02;
            a13 += 0.02;
            a14 += 0.02;
            a15 += 0.02;
            a16 += 0.02;
        })

    }

    wave();


    engine.runRenderLoop(function () {
        scene.render();
    });



    //création des fenètres modales
    // var fenetreModal = document.getElementById('fenetreModal'); //On récupère la fenêtre modale du fichier musee.html
    // window.onclick = function () { fenetreModal.style.display = "none"; } //On cache la fenêtre modale si on clique sur la croix
    // window.onclick = function (event) {
    //     if (event.target == fenetreModal)
    //         fenetreModal.style.display = "block";
    // }

    return scene;
}

window.addEventListener('resize', function () { engine.resize() });
var scene = createScene();

