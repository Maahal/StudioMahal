// Configuração básica da cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adicionando um plano para simular a ilha
const geometry = new THREE.PlaneGeometry(100, 100, 50, 50);
const material = new THREE.MeshStandardMaterial({ color: 0x3aa42b, side: THREE.DoubleSide });
const island = new THREE.Mesh(geometry, material);
island.rotation.x = -Math.PI / 2; // Rotação para que o plano fique horizontal
scene.add(island);

// Adicionando água ao redor da ilha
const waterGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
const waterMaterial = new THREE.MeshStandardMaterial({ color: 0x0077be, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
const water = new THREE.Mesh(waterGeometry, waterMaterial);
water.rotation.x = -Math.PI / 2;
water.position.y = -1; // Posição abaixo do nível do terreno para simular água
scene.add(water);

// Configuração da iluminação
const sunlight = new THREE.DirectionalLight(0xffffff, 1);
sunlight.position.set(10, 20, 10);
scene.add(sunlight);

// Posição da câmera
camera.position.set(0, 5, 10);

// Animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Responsividade
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
