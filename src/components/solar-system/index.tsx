import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Planet } from "./planet";
//import { Stars } from "./stars";
import { Sun } from "./sun";

//<Sun />
export function SolarSystem() {
  return (
    <Canvas
      camera={{
        position: [0, 50, 80],
        fov: 60,
      }}
    >
      <ambientLight position={[1, 1, 1]} />
      <Sun radius={5} />
      <Planet distance={8} velocity={1} size={2} />
      <Planet distance={6} velocity={1} size={2} />
      <Planet distance={10} velocity={1} size={2} />
      <Planet distance={12} velocity={1} size={2} />
      <OrbitControls />
      <gridHelper scale={[10, 0, 10]} />
    </Canvas>
  );
}
