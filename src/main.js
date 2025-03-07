import "./style.css";

import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x626262);

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight
);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Torus
const geometry = new THREE.SphereGeometry(2, 50, 50);
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// lights
const ambientLight = new THREE.AmbientLight(0x404040, 5); // soft white light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(3, 4, 4);
scene.add(ambientLight, directionalLight);

// camera control
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(-3, 2, 5);
controls.update();

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
	requestAnimationFrame(animate);
	mesh.rotation.y -= 0.01;
	renderer.render(scene, camera);
}

animate();
