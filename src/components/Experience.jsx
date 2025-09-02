import { Environment, OrbitControls, Sky, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Avatar } from "./avatar";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  const room = useGLTF("models/room.glb");

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
      <group position={[0, -1, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <primitive object={room.scene} />
        <Avatar animation={animation} />
      </group>
    </>
  );
};
