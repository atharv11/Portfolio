import { useRef, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

export default function ObjModel() {
  const obj = useLoader(OBJLoader, '/models/Victory.obj');
  const ref = useRef();
  const { camera } = useThree();            // ← grab the camera


  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0005;
  });

  /* -------- One-time material swap (your original code) ----- */
  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 'white',
          metalness: 0.5,
          roughness: 0.6,
        });
      }
    });
  }, [obj]);

  /* -------- Camera tilt on scroll -------------------------- */
useEffect(() => {
  const center = new THREE.Vector3(45,10, 0);  // model position
  const radius = 100;                        // distance from model (tune this)
  const heightRange = [100,-150];            // vertical movement (Y-axis)
  const angleRange = [Math.PI / 3, -Math.PI / 3];  // horizontal rotation (Y orbit)

  function handleScroll() {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct = maxScroll ? window.scrollY / maxScroll : 0; // 0 → 1

    // Angle for horizontal orbit (around Y axis)
    const theta = THREE.MathUtils.lerp(angleRange[0], angleRange[1], pct);
    const y = THREE.MathUtils.lerp(heightRange[0], heightRange[1], pct);

    // Calculate new camera position in a circular arc
    const x = radius * Math.sin(theta);
    const z = radius * Math.cos(theta);

    camera.position.set(x, y, z);
    camera.lookAt(center);  // Always look at model center
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run once
  return () => window.removeEventListener('scroll', handleScroll);
}, [camera]);


  return (
    <primitive
      ref={ref}
      object={obj}
      scale={5.75}
      position={[0, -1500, 0]}
    />
  );
}
