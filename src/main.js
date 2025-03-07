import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2f2f2f);

// camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(-2, 2, 5);

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
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

// controls
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;
controls.enableDamping = true;
controls.dampingFactor = 1;
scene.add(controls);

function animate() {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

animate();
