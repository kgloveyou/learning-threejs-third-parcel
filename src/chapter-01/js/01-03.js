import * as THREE from 'three';

// create a scene, that will hold all our elements such as objects, cameras and lights.
let scene = new THREE.Scene();

// create a camera, which defines where we're looking at.
let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);

// create a render and set the size
let renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);

// // show axes in the screen
// let axes = new THREE.AxesHelper(20);
// scene.add(axes);

// create the ground plane
let planeGeometry = new THREE.PlaneGeometry(60, 20);
let planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xAAAAAA,
});
let plane = new THREE.Mesh(planeGeometry, planeMaterial);

// rotate and position the plane
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(15, 0, 0);
plane.receiveShadow = true;

// add the plane to the scene
scene.add(plane);

// create a cube
let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
let cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xFF0000,
});
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;

// position the cube
cube.position.x = -4;
cube.position.y = 2;
cube.position.z = 0;

// add the cube to the scene
scene.add(cube);

// create a sphere
let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
let sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x7777FF,
});
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// position the sphere
sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = 2;
sphere.castShadow = true;

// add the sphere to the scene
scene.add(sphere);

// position and point the camera to the center of the scene
camera.position.set(-30, 40, 30);
camera.lookAt(scene.position);

// add spotlight for the shadows
let spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.position.set(-40, 40, -15);
spotLight.castShadow = true;
spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
spotLight.shadow.camera.far = 130;
spotLight.shadow.camera.near = 40;

// If you want a more detailled shadow you can increase the 
// mapSize used to draw the shadows.
// spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
scene.add(spotLight);

let ambienLight = new THREE.AmbientLight(0x353535);
scene.add(ambienLight);

// add the output of the renderer to the html element
document.getElementById('webgl-output').appendChild(renderer.domElement);

// render the scene
renderer.render(scene, camera);