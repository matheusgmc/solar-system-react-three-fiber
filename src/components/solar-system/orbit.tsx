import * as THREE from "three";
import { MeshProps } from "@react-three/fiber";

export interface OrbitProps extends MeshProps {
  orbit: number;
}

export function Orbit({ orbit, ...props }: OrbitProps) {
  return (
    <mesh {...props}>
      <ringGeometry args={[orbit - 0.5, orbit, 90]} />
      <meshBasicMaterial
        color="white"
        opacity={0.09}
        transparent
        side={THREE.FrontSide}
      />
    </mesh>
  );
}
