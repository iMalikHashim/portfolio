import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * A glowing distorted wireframe icosahedron that slowly rotates and
 * reacts subtly to the pointer — the futuristic centerpiece of the hero.
 */
function CoreObject() {
  const mesh = useRef<THREE.Mesh>(null!);
  const wire = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.1 + y * 0.3;
      mesh.current.rotation.y = t * 0.15 + x * 0.3;
    }
    if (wire.current) {
      wire.current.rotation.x = t * 0.1 + y * 0.3;
      wire.current.rotation.y = t * 0.15 + x * 0.3;
      const s = 1 + Math.sin(t * 0.8) * 0.04;
      wire.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Solid translucent core */}
      <Icosahedron ref={mesh} args={[1.6, 1]}>
        <meshStandardMaterial
          color="#1b1140"
          emissive="#5b21b6"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.55}
        />
      </Icosahedron>
      {/* Neon wireframe shell */}
      <Icosahedron ref={wire} args={[1.85, 1]}>
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
      </Icosahedron>
    </group>
  );
}

/** A drifting starfield of points surrounding the core. */
function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 1400;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = state.clock.elapsedTime * 0.012;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a5b4fc"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -3, 2]} intensity={1.2} color="#d946ef" />
        <CoreObject />
        <StarField />
      </Suspense>
    </Canvas>
  );
}
