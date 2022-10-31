


document.getElementById("ajaxButton").onclick = function (){
    location.href = "tables.html"
}




//----------- THREE -------------------

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.module.js';

import { DirectionalLight } from '../node_modules/three/src/lights/DirectionalLight.js';
import { DirectionalLightShadow } from '../node_modules/three/src/lights/DirectionalLightShadow.js';
import { TextureLoader } from '../node_modules/three/src/loaders/TextureLoader.js';
import { Color } from '../node_modules/three/src/math/Color.js';


// -------Resizing renderer on window resize START ----------
function resize_renderer() {
    var factor = 1; // percentage of the screen
    var w = window.innerWidth * factor;
    var h = window.innerHeight * factor;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
};

window.addEventListener("resize", resize_renderer);
// -------Resizing renderer on window resize END ----------


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5,5,15);
camera.rotation.y = 0.7;

const renderer = new THREE.WebGLRenderer({

    canvas: document.querySelector('#threeGlobe'),});




const gridHelper = new THREE.GridHelper(200,50);
const sunLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
sunLight.position.set(10,20,10);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 512;
sunLight.shadow.mapSize.height = 512;
sunLight.shadow.camera.near = 0.5;
sunLight.shadow.camera.far = 100;
sunLight.shadow.camera.left = -10;
sunLight.shadow.camera.bottom = -10;
sunLight.shadow.camera.top = 10;
sunLight.shadow.camera.right = 10;

const pointLight = new THREE.PointLight( 0xffffff, 1, 100);
pointLight.position.set(0,10,30);




    let textures = {
        //credits for textures go to https://free3d.com/user/ali_alkendi
        bumpText: new TextureLoader().load("assets/earthbump.jpg"),
        specText: new TextureLoader().load("assets/earthspec.jpg")
}






renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);




const geometry = new THREE.SphereGeometry(10,70,70);
const material = new THREE.MeshPhysicalMaterial({
    map: textures.specText,
    //roughnessMap: textures.specText,
    //bumpMap: textures.bumpText,
    //bumpScale: 1,

    sheen: 1,
    sheenRoughness: 0.1,
    sheenColor: new Color('#ff8a00').convertSRGBToLinear(),
    clearcoat: 1,

});


const sphere = new THREE.Mesh(geometry,material);

sphere.receiveShadow = true;


//scene.add(gridHelper)
scene.add(sphere)
scene.add(sunLight)
scene.add(pointLight)

function animate(){
    requestAnimationFrame(animate);
    
    sphere.rotation.x += 0.0007;
    sphere.rotation.y += 0.002;


    renderer.render(scene,camera)
}

animate();