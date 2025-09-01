import { useState } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Avatar } from "./avatar";
import { useMemo } from "react";
import { useControls } from "leva";

export const Experience = () => {
  // const [animation, setAnimation] = useState();

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  return (
    <>
      <OrbitControls />
      <Perf position="top-left" />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Environment files="/venice_sunset_1k.hdr" />
      <group position={[0, -1, 0]}>
        <ContactShadows
          opacity={0.45}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />

        <Avatar animation={animation} />
        {animation !== "Falling" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}
        <mesh scale={5} rotation-x={-Math.PI / 2} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
