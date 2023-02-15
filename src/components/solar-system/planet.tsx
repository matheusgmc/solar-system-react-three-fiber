import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Euler, Material, Mesh, TextureLoader } from "three";
import { Orbit } from "./orbit";

interface PlanetsProps extends MeshProps {
  distance: number;
  velocity: number;
  size: number;
  texture_name?: string;
}
export function Planet({
  distance = 20,
  velocity = 1,
  size = 1,
  texture_name,
  ...props
}: PlanetsProps) {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  const orbitRadius = 2 * distance;
  const rotation = new Euler(-1.5, 0, 0);
  let texture = null;
  if (texture_name) {
    texture = useLoader(TextureLoader, `/${texture_name}.jpg`);
  }

  let orbit = Math.random() * Math.PI * 2;

  useFrame((_, delta) => {
    if (!ref.current) return;
    orbit += delta * velocity;
    return (
      ref.current.position.set(
        Math.cos(orbit) * orbitRadius,
        0,
        Math.sin(orbit) * orbitRadius
      ),
      (ref.current.rotation.y += delta * 0.5)
    );
  });
  return (
    <>
      <mesh {...props} ref={ref} position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[size, 10, 10]} />
        <meshBasicMaterial color={texture ? "" : "blue"} map={texture} />
      </mesh>
      <Orbit orbit={orbitRadius} rotation={rotation} />
    </>
  );
}
