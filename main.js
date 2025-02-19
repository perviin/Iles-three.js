import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Bleu ciel
scene.fog = new THREE.Fog(0x87CEEB, 10, 50); // Brouillard pour la profondeur

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 15);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Active les ombres
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Ombres douces
document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(10, 20, 10);
directionalLight.castShadow = true; 
directionalLight.shadow.mapSize.width = 2048; 
directionalLight.shadow.mapSize.height = 2048; 
directionalLight.shadow.camera.near = 0.5; 
directionalLight.shadow.camera.far = 50; 
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x404040, 1);
scene.add(hemisphereLight);

const loader = new GLTFLoader();
loader.load('island.glb', function (gltf) {
    const island = gltf.scene;
    island.scale.set(1, 1, 1);
    island.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add(island);
}, undefined, function (error) {
    console.error('Erreur de chargement du modèle:', error);
});

const waterGeometry = new THREE.PlaneGeometry(50, 50);
const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x1E90FF,
    transparent: true,
    opacity: 0.6
});
const water = new THREE.Mesh(waterGeometry, waterMaterial);
water.rotation.x = -Math.PI / 2;
water.position.y = -2;
water.receiveShadow = true;
scene.add(water);

const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2.1;
ground.receiveShadow = true;
scene.add(ground);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
