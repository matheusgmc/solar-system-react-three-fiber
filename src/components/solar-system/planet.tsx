import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Euler, Material, Mesh, TextureLoader } from "three";
import { Orbit } from "./orbit";
import { Ring } from "./ring";

interface PlanetsProps extends MeshProps {
  position: number;
  velocity: number;
  size: number;
  texture_name?: string;
  multiply_orbit?: number;
  ring?: boolean;
}
export function Planet({
  position = 20,
  velocity = 1,
  size = 1,
  texture_name,
  ring,
  multiply_orbit,
  ...props
}: PlanetsProps) {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  const ringDistance = size * 1.5;

  const distance = 2 * size * position * (multiply_orbit || 2);

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
        Math.cos(orbit) * distance,
        0,
        Math.sin(orbit) * distance
      ),
      (ref.current.rotation.y += delta * 0.5)
    );
  });
  return (
    <>
      <mesh {...props} ref={ref} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 20, 20]} />
        <meshBasicMaterial color={texture ? "" : "blue"} map={texture} />
        {ring ? (
          <Ring distance={ringDistance} depth={0.1} rotation={rotation} />
        ) : (
          <></>
        )}
      </mesh>
      <Orbit orbit={distance} rotation={rotation} />
    </>
  );
}
