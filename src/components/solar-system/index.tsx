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
  {
    name: "jupiter",
    velocity: 0.7,
    multiply_size: 2,
    multiply_orbit: 1,
  },
  {
    name: "saturn",
    velocity: 0.6,
    ring: true,
    multiply_size: 2,
    multiply_orbit: 1,
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
      {planets.map((planet, index) => (
        <Planet
          key={`${planet.name}-${index}`}
          position={index + 1}
          multiply_orbit={planet.multiply_orbit}
          velocity={planet.velocity}
          texture_name={planet.name}
          ring={planet.ring}
          size={planet.multiply_size ? planet.multiply_size * 2 : 2}
        />
      ))}
      <OrbitControls />
      <gridHelper scale={[10, 0, 10]} />
    </Canvas>
  );
}
