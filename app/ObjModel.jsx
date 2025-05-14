import { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

export default function ObjModel() {
  const obj = useLoader(OBJLoader, '/models/Victory.obj');
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 'white',
          metalness: 0.3,
          roughness: 0.6,
        });
      }
    });
  }, [obj]);

  return <primitive  ref={ref} object={obj} scale={1.75} position={[0, -400, 0]} />;
}
