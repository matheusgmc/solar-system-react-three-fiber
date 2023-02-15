import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Planet } from "./planet";
import { Sun } from "./sun";

const planets = [
  {
    name: "mercury",
    velocity: 2.5,
  },
  {
    name: "venus",
    velocity: 1.5,
  },
  {
    name: "earth",
    velocity: 1,
  },
  {
    name: "mars",
    velocity: 0.9,
  },
];

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
      {planets.map((value, index) => (
        <Planet
          key={`${value.name}-${index}`}
          distance={6 + 3 * index}
          velocity={value.velocity}
          texture_name={value.name}
          size={2}
        />
      ))}
      <OrbitControls />
      <gridHelper scale={[10, 0, 10]} />
    </Canvas>
  );
}
