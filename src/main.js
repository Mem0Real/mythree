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
	200
);
// camera.position.set(-2, 2, 5);
camera.position.z = 5;

// create cube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// create custom geometry
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
	-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

	1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
]);

geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial({
	color: "red",
	side: THREE.DoubleSide,
	// wireframe: true,
});
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
controls.enableDamping = true;
// controls.autoRotate = true;

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});
function animate() {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

animate();
