import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x2f2f2f);

// camera
const camera = new THREE.PerspectiveCamera(
	35,
	window.innerWidth / window.innerHeight,
	0.1,
<<<<<<< HEAD
	250
=======
	200
>>>>>>> bufferObj
);
// camera.position.set(-2, 2, 5);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
<<<<<<< HEAD
const material = new THREE.MeshStandardMaterial({ color: "red" });
=======
const material = new THREE.MeshBasicMaterial({
	color: "red",
	wireframe: true,
});
>>>>>>> bufferObj
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// light
const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 1.5);
light.position.set(0.5, 1, 0.75);
scene.add(light);

// renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
<<<<<<< HEAD
=======
// controls.autoRotate = true;
>>>>>>> bufferObj

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});
const renderLoop = () => {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(renderLoop);
};

renderLoop();
