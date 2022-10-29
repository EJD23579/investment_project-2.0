


// html interactivity

$(".fa-solid fa-bars").on("click", function(){
    $(this).toggleClass("down"); 
});







//----------- THREE -------------------

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r99/three.module.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#threeGlobe'),});
const gridHelper = new THREE.GridHelper(200,50);



renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);



const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe:true});
const torus = new THREE.Mesh(geometry,material);
   


scene.add(gridHelper)
scene.add(torus)

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}

animate();