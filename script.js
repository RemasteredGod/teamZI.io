document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#bg-canvas');

  if (canvas) {
    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create a rotating sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lighting for the sphere
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff0000, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Rotate Sphere Animation
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Resize the renderer on window resize
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  } else {
    console.error('Canvas element not found');
  }

  // Scroll animations for sections
  gsap.from('#concept', {
    scrollTrigger: {
      trigger: '#concept',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  gsap.from('#workflow', {
    scrollTrigger: {
      trigger: '#workflow',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});
