import "./style.css";

import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x626262);

// camera
const camera = new THREE.PerspectiveCamera(
	50,
	window.innerWidth / window.innerHeight,
	0.5,
	35
);
camera.position.set(-3, 2, 5);

// renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// mesh
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// lights
const ambientLight = new THREE.AmbientLight(0x404040, 5); // soft white light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(3, 4, 4);
scene.add(ambientLight, directionalLight);

// orbit control
const controls = new OrbitControls(camera, canvas);
controls.maxDistance = 30;
controls.minDistance = 7;
controls.autoRotate = true;
controls.enableDamping = true;
// controls.dampingFactor = 0.1;

// responsiveness
window.addEventListener("resize", () => {
	width = window.innerWidth;
	height = window.innerHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(scene, camera);
});

function animate() {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

animate();
