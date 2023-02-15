import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Material, Mesh, TextureLoader } from "three";

const velocity = 20 / 100; //20%;

export interface SunProps {
  radius: number;
}

export function Sun({ radius }: SunProps) {
  const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const data = useLoader(TextureLoader, "/sun.png");

  useFrame((_, delta) => {
    if (!ref.current) return;
    return (ref.current.rotation.y += delta * velocity);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 10, 10]} />
      <meshBasicMaterial map={data} />
    </mesh>
  );
}
