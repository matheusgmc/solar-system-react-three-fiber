import * as THREE from "three";
import { MeshProps } from "@react-three/fiber";

export interface RingProps extends MeshProps {
  distance: number;
  depth: number;
}
export function Ring({ distance: size = 1, depth, ...props }: RingProps) {
  return (
    <mesh {...props}>
      <ringGeometry args={[size - depth, size, 30]} />
      <meshBasicMaterial
        color={"white"}
        side={THREE.DoubleSide}
        transparent={true}
        opacity={0.2}
      />
    </mesh>
  );
}
